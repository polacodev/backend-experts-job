import {
  GraphQLObjectType, GraphQLID, GraphQLString,
} from 'graphql';

const NotificationType = new GraphQLObjectType({
  name: 'NotificationType',
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    message: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    knowledge: { type: GraphQLString },
  }),
});

export default NotificationType;
