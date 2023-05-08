import { NextFunction, Request, Response } from 'express';
import { errorInterface } from '../interfaces/errors.interface';

// we need 4 parameters to get counted as an error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function clientErrorHandler(err: errorInterface, req: Request, res: Response, next: NextFunction): void {

    res.status(err.status || 500)
        .json({ message: err.message || (typeof err == 'string' ? err : 'An error occured!') });

}