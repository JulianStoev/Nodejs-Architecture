import express from 'express';
import cors from 'cors';

export default ({ app }: { app: express.Application }) => {

    // It shows the real origin IP if behind proxy
    app.enable('trust proxy');

    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // Transforms the raw string of req.body into json
    app.use(express.json());

};