import express from 'express';

import home from '../routes/home.route';
import healthCheck from '../routes/healthcheck.route';

export default function RoutesStartup( app: express.Application ): void {

    app.use(`/healthcheck`, healthCheck);

    app.use(`/home`, home);

}
