import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import userType from './user.schema';
import { getAllUsers, getUserByID, addUser } from './user.api';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (root, args) => addUser(args),
    },
  },
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
