import express from 'express';
import expressLoader from './express';
import routesLoader from './routes';
import dbLoader from './db';

export default async ({ expressApp }: { expressApp: express.Application }) => {

  // database
  await dbLoader();

  // express
  expressLoader({ app: expressApp });

  // routing
  routesLoader({ app: expressApp });

};