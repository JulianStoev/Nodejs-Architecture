import express from 'express';
import expressStartup from './express.startup';
import routesStartup from './routes.startup';
import dbStartup from './db.startup';
import errorsStartup from './errors.startup';

export default function initStartup(expressApp: express.Application): void {

    // database
    dbStartup();

    // express
    expressStartup( expressApp );

    // routing
    routesStartup( expressApp );

    // error handling, must be the last loaded item
    errorsStartup( expressApp );

}
