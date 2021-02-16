import { GraphQLObjectType } from 'graphql';
import { addUser, updateUser, deleteUser } from '../components/user/user.resolver';
import {
  addContact, updateContact, deleteContact,
} from '../components/contact/contact.resolver';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    updateUser,
    deleteUser,
    addContact,
    updateContact,
    deleteContact,
  },
});

export default mutationType;
