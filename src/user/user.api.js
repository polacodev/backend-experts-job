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

export const addUser = async ({ user }) => {
  try {
    const newUser = new USER({
      name: user.name,
      email: user.email,
      password: user.password,
      cellphone: user.cellphone,
      workarea: user.workarea,
      status: user.status,
    });
    return await newUser.save();
  } catch (error) {
    return error;
  }
};

export const updateUser = async ({ _id, user }) => {
  try {
    return await USER.findByIdAndUpdate(_id, user, { new: true });
  } catch (error) {
    return error;
  }
};

export const deleteUser = async ({ _id }) => {
  try {
    return await USER.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
};
