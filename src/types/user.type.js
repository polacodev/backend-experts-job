import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    status: { type: GraphQLBoolean },
  }),
});

export default userInput;
