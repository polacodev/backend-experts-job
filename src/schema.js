import { GraphQLSchema } from 'graphql';
import { mutationType, queryType } from './user/user.resolver';

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schema;
