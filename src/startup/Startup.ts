import express from 'express';
import ExpressStartup from './Express.startup';
import RoutesStartup from './Routes.startup';
import DbStartup from './Db.startup';
import ErrorsStartup from './Errors.startup';
import EventsStartup from './Events.startup';
import { SERVER_HOST, SERVER_PORT } from '../config/server.config';

export default function Startup(): void {

    const app = express();

    // database
    DbStartup();

    // express
    ExpressStartup( app );

    // routing
    RoutesStartup( app );

    // events
    EventsStartup();

    // error handling, must be the last loaded item
    ErrorsStartup( app );

    app.listen(SERVER_PORT, () => {
        console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
    });

}
