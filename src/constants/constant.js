/* eslint-disable camelcase */
import 'dotenv/config';

export const buildCustomQuery = (search) => {
  const fieldName = Object.keys(search)[0];
  const filterName = Object.keys(search[fieldName])[0];
  const fieldValue = search[fieldName][filterName];
  const regex = {};
  const query = {};
  if (fieldName !== 'status') {
    regex.$regex = `.*${fieldValue}.*`;
    query[fieldName] = regex;
    return query;
  }
  query[fieldName] = fieldValue;
  return query;
};

export const one_signal_path = '/api/v1/notifications';

export const one_signal_app_id = `${process.env.ONE_SIGNAL_APP_ID}`;

export const one_signal_rest_api_key = `Basic ${process.env.ONE_SIGNAL_REST_API_KEY}`;

export const one_signal_host = `${process.env.ONE_SIGNAL_HOST}`;

export const one_signal_port = process.env.ONE_SIGNAL_PORT;
