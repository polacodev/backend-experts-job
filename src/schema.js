import { GraphQLSchema } from 'graphql';
import queryType from './queries/index';
import mutationType from './mutations/index';

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schema;
