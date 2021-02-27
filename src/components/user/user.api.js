import _ from 'lodash';

import USER from './user.model';
import buildCustomQuery from '../../constants/constant';
import * as encrypt from '../../encode-decode/encode-decode';

const userAlreadyRegistered = async (email) => {
  try {
    const userEmail = { email };
    const response = await USER.findOne(userEmail);
    return response !== null;
  } catch (error) {
    return error;
  }
};

const getUsersWithParams = async (search, user) => {
  let res = [];
  let userDecoded = {};

  if (search === undefined && user === undefined) {
    res = USER.find();
  }

  if (user && search) {
    userDecoded = encrypt.decode(user);
    const response = await USER.find(buildCustomQuery(search));
    res = _.filter(response, (element) => element.email !== userDecoded.email);
  }

  if (user && search === undefined) {
    userDecoded = encrypt.decode(user);
    const response = await USER.find();
    res = _.filter(response, (element) => element.email !== userDecoded.email);
  }

  if (search && user === undefined) {
    res = await USER.find(buildCustomQuery(search));
  }

  return res;
};

export const getUsersFilterAPI = async ({ search, user }) => {
  try {
    return await getUsersWithParams(search, user);
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

export const createUserAPI = async ({ user }) => {
  try {
    const newUser = new USER({
      name: user.name,
      email: user.email,
      password: encrypt.encode(user.password),
      cellphone: user.cellphone,
      workarea: user.workarea,
      status: user.status,
      description: user.description,
      knowledge: user.knowledge,
    });
    return await userAlreadyRegistered(user.email) ? null : await newUser.save();
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

export const getUserByStringAPI = async ({ token }) => {
  try {
    return await USER.findOne({ email: encrypt.decode(token).email });
  } catch (error) {
    return error;
  }
};
