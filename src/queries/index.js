import { GraphQLObjectType } from 'graphql';
import { getUser, getUsers } from '../user/user.resolver';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: { getUsers, getUser },
});

export default queryType;
