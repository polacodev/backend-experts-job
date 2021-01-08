import { GraphQLObjectType } from 'graphql';
import { addNotification } from '../components/notification/notification.resolver';
import { userAdded } from '../components/user/user.resolver';

const subscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    addNotification,
    userAdded,
  },
});

export default subscriptionType;
