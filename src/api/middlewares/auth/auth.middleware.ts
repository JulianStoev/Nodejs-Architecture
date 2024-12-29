import { NextFunction, Request, Response } from "express";
import { HEADERS_AUTH } from "../../../config/headers.config";
import { isLoggedDb } from "../../../dal/mysql/auth.dal";
import { eventEmitter } from "../../../startup/Events.startup";

export async function isLogged(req: Request, res: Response, next: NextFunction): Promise<void> {

    const authToken = req.header(HEADERS_AUTH);
    if (authToken === undefined) {
        emitUnauthorized(req.baseUrl);
        next({status: 401});
        return;
    }

    const isLogged = await isLoggedDb(authToken);
    if (isLogged !== undefined) {
        if (isLogged.sqlMessage === undefined) {
            next();
        } else {
            emitUnauthorized(`${req.path}; ${isLogged.sqlMessage}`);
            next({status: 401, message: isLogged.sqlMessage});
        }
        return
    }

    next({status: 401});
}

// if you wish to notify that there was an error
function emitUnauthorized(message: string): void {
    eventEmitter.emit('unauthorized', message);
}