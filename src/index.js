import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import database from './config/dbConfig';
import 'dotenv/config';

const app = express();

database();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(process.env.BACKEND_PORT, () => console.log(`localhost:${process.env.BACKEND_PORT}/graphql`));
