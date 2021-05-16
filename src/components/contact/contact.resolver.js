import {
  GraphQLNonNull, GraphQLID, GraphQLList,
} from 'graphql';

import {
  createContactAPI, updateContactAPI,
  deleteContactAPI, getContactsAPI,
  getContactsByUserIdAPI,
} from './contact.api';
import ContactInput from '../../types/contact.type';
import contactType from './contact.schema';
import pubsub from '../../config/pub-subscription';

export const contactAdded = {
  type: contactType,
  subscribe: () => pubsub.asyncIterator('CONTACT_ADDED'),
};

export const createContact = {
  type: contactType,
  args: {
    contact: { type: new GraphQLNonNull(ContactInput) },
  },
  resolve: async (obj, args) => {
    const data = await createContactAPI(args);
    pubsub.publish('CONTACT_ADDED', { contactAdded: data });
    return data;
  },
};

export const updateContact = {
  type: contactType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    contact: { type: new GraphQLNonNull(ContactInput) },
  },
  resolve: (obj, args) => updateContactAPI(args),
};

export const deleteContact = {
  type: contactType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => deleteContactAPI(args),
};

export const getContacts = {
  type: new GraphQLList(contactType),
  resolve: () => getContactsAPI(),
};

export const getContactsByUserId = {
  type: new GraphQLList(contactType),
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getContactsByUserIdAPI(args),
};
