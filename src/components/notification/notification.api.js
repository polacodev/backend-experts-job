import NOTIFICATION from './notification.model';

export const getAllNotificationsAPI = async () => {
  try {
    return await NOTIFICATION.find();
  } catch (error) {
    return error;
  }
};

export const addNotificationAPI = async ({ notification }) => {
  try {
    const newNotification = new NOTIFICATION({
      user_id: notification.user_id,
      message: notification.message,
    });
    return await newNotification.save();
  } catch (error) {
    return error;
  }
};
