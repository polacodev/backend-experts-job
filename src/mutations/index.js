import { GraphQLObjectType } from 'graphql';
import { createUser, updateUser, deleteUser } from '../components/user/user.resolver';
import {
  createContact, updateContact, deleteContact,
} from '../components/contact/contact.resolver';
import {
  createNotification, deleteNotification, updateNotification,
} from '../components/notification/notification.resolver';
import {
  createRate, deleteRate,
} from '../components/rate/rate.resolver';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser,
    updateUser,
    deleteUser,
    createContact,
    updateContact,
    deleteContact,
    createNotification,
    deleteNotification,
    updateNotification,
    createRate,
    deleteRate,
  },
});

export default mutationType;
