import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql';

const authType = new GraphQLObjectType({
  name: 'AuthType',
  fields: () => ({
    isAuthenticated: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  }),
});

export default authType;
