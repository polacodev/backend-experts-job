import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const contactType = new GraphQLObjectType({
  name: 'ContactType',
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    createdBy: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    knowledge: { type: GraphQLString },
  }),
});

export default contactType;
