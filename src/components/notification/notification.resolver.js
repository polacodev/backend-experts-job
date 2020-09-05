import {
  GraphQLNonNull, GraphQLList,
} from 'graphql';
import {
  getAllNotificationsAPI, addNotificationAPI,
} from './notification.api';
import NotificationInput from '../../types/notification.type';
import NotificationType from './notification.schema';

export const addNotification = {
  type: NotificationType,
  args: {
    notification: { type: new GraphQLNonNull(NotificationInput) },
  },
  resolve: (obj, args) => addNotificationAPI(args),
};

export const getNotifications = {
  type: new GraphQLList(NotificationType),
  resolve: () => getAllNotificationsAPI(),
};
