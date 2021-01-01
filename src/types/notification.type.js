import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

const NotificationInput = new GraphQLInputObjectType({
  name: 'NotificationInput',
  fields: () => ({
    user_id: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});

export default NotificationInput;
