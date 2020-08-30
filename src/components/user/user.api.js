import USER from './user.model';
import buildCustomQuery from '../../constants/constant';

export const getUsersFilterAPI = async ({ search }) => {
  try {
    return await USER.find(buildCustomQuery(search));
  } catch (error) {
    return error;
  }
};

export const getAllUsersAPI = async () => {
  try {
    return await USER.find();
  } catch (error) {
    return error;
  }
};

export const getUserByIdAPI = async ({ _id }) => {
  try {
    return await USER.findById(_id);
  } catch (error) {
    return error;
  }
};

export const addUserAPI = async ({ user }) => {
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

export const updateUserAPI = async ({ _id, user }) => {
  try {
    return await USER.findByIdAndUpdate(_id, user, { new: true });
  } catch (error) {
    return error;
  }
};

export const deleteUserAPI = async ({ _id }) => {
  try {
    return await USER.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
};
