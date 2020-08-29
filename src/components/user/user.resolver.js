import {
  GraphQLNonNull, GraphQLID, GraphQLList,
} from 'graphql';
import {
  getAllUsersAPI, getUserByIdAPI, addUserAPI, updateUserAPI, deleteUserAPI,
} from './user.api';
import userInput from '../../types/user.type';
import userType from './user.schema';

export const addUser = {
  type: userType,
  args: {
    user: { type: new GraphQLNonNull(userInput) },
  },
  resolve: (obj, args) => addUserAPI(args),
};

export const updateUser = {
  type: userType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    user: { type: new GraphQLNonNull(userInput) },
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
