import express from 'express';
import config from '../config';

import home from '../routes/home.route';
import healthCheck from '../routes/healthcheck.route';

export default ({ app }: { app: express.Application }) => {

    app.use(`${config.api.prefix}/healthcheck`, healthCheck);

    app.use(`${config.api.prefix}/home`, home);

}