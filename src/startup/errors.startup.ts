import express from 'express';
import { clientErrorHandler } from '../middlewares/errors.middleware';

export default function errorsStartup( app: express.Application ): void {

    app.use(clientErrorHandler);

    // prevents the server from dying on your unhandled exceptions
    process.on('uncaughtException', (err) => {
        console.log('Exception:', err);
    });

}
