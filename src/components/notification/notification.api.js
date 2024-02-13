/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import NOTIFICATION from './notification.model';

const notificationAlreadyRegistered = async (user_id, createdBy) => {
  try {
    const notificationCreated = { user_id, createdBy };
    const response = await NOTIFICATION.findOne(notificationCreated);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllNotificationsAPI = async () => {
  try {
    return await NOTIFICATION.find();
  } catch (error) {
    return error;
  }
};

export const getNotificationsByUserIdAPI = async ({ _id }) => {
  try {
    return await NOTIFICATION.find({ user_id: _id });
  } catch (error) {
    return error;
  }
};

export const updateNotificationAPI = async ({ _id, notification }) => {
  try {
    const newNotification = {
      user_id: notification._id,
      createdBy: notification.createdBy,
      message: notification.message,
      name: notification.name,
      email: notification.email,
      cellphone: notification.cellphone,
      workarea: notification.workarea,
      knowledge: notification.knowledge,
    };
    return await NOTIFICATION.findByIdAndUpdate(_id, newNotification, { new: true });
  } catch (error) {
    return error;
  }
};

export const createNotificationAPI = async ({ notification }) => {
  try {
    const newNotification = new NOTIFICATION({
      user_id: notification._id,
      createdBy: notification.createdBy,
      message: notification.message,
      name: notification.name,
      email: notification.email,
      cellphone: notification.cellphone,
      workarea: notification.workarea,
      knowledge: notification.knowledge,
    });
    const response = await notificationAlreadyRegistered(notification._id, notification.createdBy);
    if (response === null) {
      return await newNotification.save();
    }
    return updateNotificationAPI({ _id: response._id, notification });
  } catch (error) {
    return error;
  }
};

export const deleteNotificationAPI = async ({ _id }) => {
  try {
    return await NOTIFICATION.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
};
