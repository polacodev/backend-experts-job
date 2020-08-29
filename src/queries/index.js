import { GraphQLObjectType } from 'graphql';
import { getUser, getUsers } from '../components/user/user.resolver';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: { getUsers, getUser },
});

export default queryType;
