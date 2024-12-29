import express from 'express';

import home from '../api/routes/home.route';
import healthCheck from '../api/routes/healthcheck.route';

export default function RoutesStartup( app: express.Application ): void {

    app.use(`/healthcheck`, healthCheck);

    app.use(`/home`, home);

}
