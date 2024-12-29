import { NextFunction, Request, Response } from "express";
import { isLoggedDb } from "../models/auth.model";
import config from "../config";
import { eventEmitter } from "../startup/Events.startup";

export async function isLogged(req: Request, res: Response, next: NextFunction): Promise<void> {

    const authToken = req.header(config.headers.auth);
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
            emitUnauthorized(req.path + '; ' + isLogged.sqlMessage);
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