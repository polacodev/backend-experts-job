/* eslint-disable no-underscore-dangle */
import { withFilter } from 'apollo-server';
import _ from 'lodash';

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
import pubsub from '../../config/pub-subscription';

// subscription
export const notificationAddedById = {
  type: NotificationType,
  args: {
    _id: { type: GraphQLNonNull(GraphQLID) },
  },
  subscribe:
    withFilter(
      () => pubsub.asyncIterator('NOTIFICATION_ADDED_BY_ID'),
      (payload, args) => _.eq(payload.notificationAddedById.user_id, args._id),
    ),
};

// export const notificationAdded = {
//   type: NotificationType,
//   subscribe: () => pubsub.asyncIterator('NOTIFICATION_ADDED'),
// };

export const createNotification = {
  type: NotificationType,
  args: {
    notification: { type: new GraphQLNonNull(NotificationInput) },
  },
  resolve: async (obj, args) => {
    const data = await createNotificationAPI(args);
    // pubsub.publish('NOTIFICATION_ADDED', { notificationAdded: data });
    pubsub.publish('NOTIFICATION_ADDED_BY_ID', { notificationAddedById: data });
    return data;
  },
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
