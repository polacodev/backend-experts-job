import {
  GraphQLObjectType, GraphQLID, GraphQLString,
} from 'graphql';

const NotificationType = new GraphQLObjectType({
  name: 'NotificationType',
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});

export default NotificationType;
