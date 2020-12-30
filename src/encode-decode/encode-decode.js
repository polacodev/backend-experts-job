/* eslint-disable camelcase */
import sign from 'jwt-encode';
import jwt_decode from 'jwt-decode';

export const encode = (data) => {
  const secret = 'secret';
  return sign(data, secret);
};

export const decode = (token) => jwt_decode(token);
