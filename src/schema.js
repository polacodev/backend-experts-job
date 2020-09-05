import { GraphQLSchema } from 'graphql';
import queryType from './queries/index';
import mutationType from './mutations/index';
import subscriptionType from './subscriptions/index';

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
  subscription: subscriptionType,
});

export default schema;
