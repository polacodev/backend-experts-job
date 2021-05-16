import { GraphQLObjectType } from 'graphql';
import { notificationAdded } from '../components/notification/notification.resolver';
import { userAdded } from '../components/user/user.resolver';
import { contactAdded } from '../components/contact/contact.resolver';

const subscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    notificationAdded,
    userAdded,
    contactAdded,
  },
});

export default subscriptionType;
