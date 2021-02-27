import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const NotificationInput = new GraphQLInputObjectType({
  name: 'NotificationInput',
  fields: () => ({
    _id: { type: GraphQLID },
    createdBy: { type: GraphQLID },
    message: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    knowledge: { type: GraphQLString },
  }),
});

export default NotificationInput;
