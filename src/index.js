import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';
import database from './config/dbConfig';
import 'dotenv/config';
import './config/colorLogConfig';

const app = express();

const extensions = ({
  operationName,
  // context,
}) => ({
  // runTime: Date.now() - context.startTime,
  operation: operationName,
});

database();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  customFormatErrorFn: (error) => ({
    message: error.message,
    locations: error.locations,
    original: error.originalError,
    path: error.path,
  }),
  // context: { startTime: Date.now() },
  graphiql: true,
  extensions,
}));

app.use('/', (req, res) => res.send('Welcome EP project'));
app.listen(process.env.BACKEND_PORT || 5000, () => console.log('[success]'.success, `${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/graphql`));
