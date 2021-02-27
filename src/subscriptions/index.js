import { GraphQLObjectType } from 'graphql';
import { createNotification } from '../components/notification/notification.resolver';
import { userAdded } from '../components/user/user.resolver';

const subscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    createNotification,
    userAdded,
  },
});

export default subscriptionType;
