import express from 'express';
import cors from 'cors';

export default function expressStartup( app: express.Application ): void {

    // it shows the real origin IP if behind proxy
    app.enable('trust proxy');

    // enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // transforms the raw string of req.body into json
    app.use(express.json());

}
