import * as dotenv from 'dotenv';
dotenv.config();

import config from './config';
import express from 'express';
import initStartup from './startup';

function startServer() {

    const app = express();

    initStartup(app);

    app.listen(config.server.port, () => {
        console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
    });

}

startServer();
