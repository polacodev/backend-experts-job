import express from 'express';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import database from './config/dbConfig';
import 'dotenv/config';
import './config/colorLogConfig';

database();
const app = express();
const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.BACKEND_PORT, () => {
  console.log('[success]'.success, `Server ready at http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}${server.graphqlPath}`);
  console.log('[success]'.success, `Subscriptions ready at ws://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}${server.subscriptionsPath}`);
});
