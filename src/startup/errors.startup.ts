import express from 'express';
import { clientErrorHandler } from '../middlewares/errors.middleware';

export default function errorsStartup( app: express.Application ): void {

    app.use(clientErrorHandler);

}
