import { GraphQLObjectType } from 'graphql';
import { notificationAddedById } from '../components/notification/notification.resolver';
import { userAdded } from '../components/user/user.resolver';
import { contactAddedById } from '../components/contact/contact.resolver';

const subscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    notificationAddedById,
    contactAddedById,
    userAdded,
    // notificationAdded,
    // contactAdded,
  },
});

export default subscriptionType;
