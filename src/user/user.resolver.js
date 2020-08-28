import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import userType from './user.schema';
import {
  getAllUsers, getUserByID, addUser, updateUser, deleteUser,
} from './user.api';
import userInput from '../types/user.type';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: userType,
      args: {
        user: { type: new GraphQLNonNull(userInput) },
      },
      resolve: (obj, args) => addUser(args),
    },
    updateUser: {
      type: userType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        user: { type: new GraphQLNonNull(userInput) },
      },
      resolve: (obj, args) => updateUser(args),
    },
    deleteUser: {
      type: userType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (obj, args) => deleteUser(args),
    },
  }),
});

export const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getUsers: {
      type: new GraphQLList(userType),
      resolve: () => getAllUsers(),
    },
    getUserByID: {
      type: userType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (obj, args) => getUserByID(args),
    },
  }),
});
