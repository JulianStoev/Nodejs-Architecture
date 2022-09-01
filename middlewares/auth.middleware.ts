import { NextFunction, Request, Response } from "express";
import { isLoggedDb } from "../models/auth.model";

export const isLogged = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.header('auth');
  if (authToken === undefined) {
    response(res, 'auth');
    return;
  }

  const isLogged = await isLoggedDb(authToken);
  if (isLogged !== undefined) {
    if (isLogged.sqlMessage === undefined) {
      next();
    } else {
      response(res, isLogged.sqlMessage);
    }
    return
  }

  response(res, 'auth');
}


function response(res: Response, message: string): void {
  res.json({success: 0, message: message});
}