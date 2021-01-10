import { GraphQLObjectType } from 'graphql';
import { getUser, getUsers } from '../components/user/user.resolver';
import { getNotifications } from '../components/notification/notification.resolver';
import authentication from '../components/authentication/authentication.resolver';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers,
    getUser,
    getNotifications,
    authentication,
  },
});

export default queryType;
