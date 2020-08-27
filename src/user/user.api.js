import USER from './user.model';

export const getAllUsers = async () => {
  try {
    return await USER.find();
  } catch (error) {
    return error;
  }
};

export const getUserByID = async ({ _id }) => {
  try {
    return await USER.findById(_id);
  } catch (error) {
    return error;
  }
};

export const addUser = ({ title }) => {
  try {
    const newTodo = new USER({
      title,
    });
    return newTodo.save();
  } catch (error) {
    return error;
  }
};
