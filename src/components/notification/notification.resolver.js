import {
  GraphQLNonNull, GraphQLList, GraphQLID,
} from 'graphql';
import {
  getAllNotificationsAPI, createNotificationAPI,
  getNotificationsByUserIdAPI, updateNotificationAPI,
  deleteNotificationAPI,
} from './notification.api';
import NotificationInput from '../../types/notification.type';
import NotificationType from './notification.schema';

export const createNotification = {
  type: NotificationType,
  args: {
    notification: { type: new GraphQLNonNull(NotificationInput) },
  },
  resolve: (obj, args) => createNotificationAPI(args),
};

export const updateNotification = {
  type: NotificationType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    contact: { type: new GraphQLNonNull(NotificationInput) },
  },
  resolve: (obj, args) => updateNotificationAPI(args),
};

export const deleteNotification = {
  type: NotificationType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => deleteNotificationAPI(args),
};

export const getNotifications = {
  type: new GraphQLList(NotificationType),
  resolve: () => getAllNotificationsAPI(),
};

export const getNotificationsByUserId = {
  type: new GraphQLList(NotificationType),
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getNotificationsByUserIdAPI(args),
};
