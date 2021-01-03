import _ from 'lodash';

import USER from '../user/user.model';
import * as encrypt from '../../encode-decode/encode-decode';

const isUserAuthenticated = (auth, response) => {
  const user = {
    email: response.email,
    password: encrypt.decode(response.password),
  };
  return _.isEqual({ email: auth.email, password: auth.password }, user);
};

const authUser = async ({ auth }) => {
  try {
    const authData = { email: auth.email };
    const response = await USER.findOne(authData);
    return response === null
      ? { isAuthenticated: false, token: null }
      : { isAuthenticated: isUserAuthenticated(auth, response), token: encrypt.encode(auth) };
  } catch (error) {
    return error;
  }
};

export default authUser;
