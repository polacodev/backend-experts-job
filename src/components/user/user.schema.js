import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    status: { type: GraphQLBoolean },
  }),
});

export default userType;
