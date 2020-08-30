import { GraphQLObjectType } from 'graphql';
import { getUser, getUsers, getCustomUsers } from '../components/user/user.resolver';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: { getUsers, getUser, getCustomUsers },
});

export default queryType;
