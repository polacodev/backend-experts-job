import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import userType from './user.schema';
import { getAllUsers, getUserByID, addUser } from './user.api';
import userInput from '../types/user.type';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: userType,
      args: {
        user: { type: new GraphQLNonNull(userInput) },
      },
      resolve: (root, args) => addUser(args),
    },
    updateUser: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(userInput) },
      },
      resolve: (root, args) => addUser(args),
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
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, args) => getUserByID(args),
    },
  }),
});
