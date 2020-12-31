import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

const authType = new GraphQLObjectType({
  name: 'AuthType',
  fields: () => ({
    isAuthenticated: { type: GraphQLBoolean },
  }),
});

export default authType;
