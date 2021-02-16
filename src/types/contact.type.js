import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

const ContactInput = new GraphQLInputObjectType({
  name: 'ContactInput',
  fields: () => ({
    name: { type: GraphQLString },
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    knowledge: { type: GraphQLString },
  }),
});

export default ContactInput;
