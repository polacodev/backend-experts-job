import axios from 'axios';

import 'dotenv/config';

// export const API_URL = `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/graphql`;
export const API_URL = '';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
