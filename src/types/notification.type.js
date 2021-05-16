import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const NotificationInput = new GraphQLInputObjectType({
  name: 'NotificationInput',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    message: { type: GraphQLString },
    createdBy: { type: GraphQLID },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    knowledge: { type: GraphQLString },
  }),
});

export default NotificationInput;
