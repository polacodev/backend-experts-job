/* eslint-disable no-underscore-dangle */
import NOTIFICATION from './notification.model';

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

export const addNotificationAPI = async ({ notification }) => {
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
    return await newNotification.save();
  } catch (error) {
    return error;
  }
};

export const updateNotificationAPI = async ({ _id, notification }) => {
  try {
    return await NOTIFICATION.findByIdAndUpdate(_id, notification, { new: true });
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
