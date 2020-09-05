import { GraphQLObjectType } from 'graphql';
import { addNotification } from '../components/notification/notification.resolver';

const subscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    addNotification,
  },
});

export default subscriptionType;
