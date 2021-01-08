import {
  GraphQLNonNull, GraphQLID, GraphQLList,
} from 'graphql';

import {
  getAllUsersAPI, getUserByIdAPI, addUserAPI,
  updateUserAPI, deleteUserAPI, getUsersFilterAPI,
} from './user.api';
import UserInput from '../../types/user.type';
import SearchUserType from '../../types/search.type';
import userType from './user.schema';
import pubsub from '../../config/pub-subscription';

export const userAdded = {
  type: userType,
  subscribe: () => pubsub.asyncIterator('USER_ADDED'),
};

export const addUser = {
  type: userType,
  args: {
    user: { type: new GraphQLNonNull(UserInput) },
  },
  resolve: async (obj, args) => {
    const data = await addUserAPI(args);
    pubsub.publish('USER_ADDED', { userAdded: data });
    return data;
  },
};

export const updateUser = {
  type: userType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    user: { type: new GraphQLNonNull(UserInput) },
  },
  resolve: (obj, args) => updateUserAPI(args),
};

export const deleteUser = {
  type: userType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => deleteUserAPI(args),
};

export const getUsers = {
  type: new GraphQLList(userType),
  resolve: () => getAllUsersAPI(),
};

export const getUser = {
  type: userType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getUserByIdAPI(args),
};

export const getCustomUsers = {
  type: new GraphQLList(userType),
  args: {
    search: { type: new GraphQLNonNull(SearchUserType) },
  },
  resolve: (obj, args) => getUsersFilterAPI(args),
};
