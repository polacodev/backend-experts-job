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

export const addUser = ({ user }) => {
  try {
    const newUser = new USER({
      name: user.name,
      email: user.email,
      password: user.password,
      cellphone: user.cellphone,
      workarea: user.workarea,
      status: user.status,
    });
    return newUser.save();
  } catch (error) {
    return error;
  }
};
