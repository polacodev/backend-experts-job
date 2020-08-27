import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'User id',
    },
    title: {
      type: GraphQLString,
      description: 'User title',
    },
  }),
});

export default userType;
