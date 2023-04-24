import express from 'express';
import config from '../config';

import home from '../routes/home.route';

export default ({ app }: { app: express.Application }) => {

    const p = config.api.prefix;

    app.use(p + '/home', home);

}