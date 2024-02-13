import {
  GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString,
} from 'graphql';

import {
  getUserByIdAPI, createUserAPI,
  updateUserAPI, deleteUserAPI, getUsersFilterAPI,
  getUserByStringAPI,
} from './user.api';
import UserInput from '../../types/user.type';
import SearchUserType from '../../types/search.type';
import userType from './user.schema';
import pubsub from '../../config/pub-subscription';

export const userAdded = {
  type: userType,
  subscribe: () => pubsub.asyncIterator('USER_ADDED'),
};

export const createUser = {
  type: userType,
  args: {
    user: { type: new GraphQLNonNull(UserInput) },
  },
  resolve: async (obj, args) => {
    const data = await createUserAPI(args);
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

export const getUser = {
  type: userType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getUserByIdAPI(args),
};

export const getUsers = {
  type: new GraphQLList(userType),
  args: {
    search: { type: SearchUserType },
    user: { type: GraphQLString },
  },
  resolve: (obj, args) => getUsersFilterAPI(args),
};

export const getUserByString = {
  type: userType,
  args: {
    token: { type: GraphQLString },
  },
  resolve: (obj, args) => getUserByStringAPI(args),
};
