import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

const AuthInput = new GraphQLInputObjectType({
  name: 'AuthInput',
  fields: () => ({
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

export default AuthInput;
