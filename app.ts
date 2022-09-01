import config from './config';
import express from 'express';

function startServer() {
  const app = express();

  require('./loaders').default({ expressApp: app });

  app.listen(config.server.port, () => {
    console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
  });

}

startServer();


// prevents the server from dying on your unhandled exceptions
process.on('uncaughtException', (err) => {
  console.log('Exception:', err);
});