import { GraphQLObjectType } from 'graphql';
import { getUser, getUsers, getUserByString } from '../components/user/user.resolver';
import { getContacts, getContactsByUserId } from '../components/contact/contact.resolver';
import { getNotifications, getNotificationsByUserId } from '../components/notification/notification.resolver';
import authentication from '../components/authentication/authentication.resolver';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUsers,
    getUser,
    getUserByString,
    getNotifications,
    getNotificationsByUserId,
    getContacts,
    getContactsByUserId,
    authentication,
  },
});

export default queryType;
