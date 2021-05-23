/* eslint-disable camelcase */
import https from 'https';
import {
  one_signal_port, one_signal_rest_api_key,
  one_signal_host, one_signal_path,
} from '../../constants/constant';

const sendNotification = (notification) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: one_signal_rest_api_key,
  };

  const options = {
    host: one_signal_host,
    port: one_signal_port,
    path: one_signal_path,
    method: 'POST',
    headers,
  };

  const req = https.request(options, (res) => {
    res.on('data', () => {
      console.log('push notification success');
    });
  });

  req.on('error', (e) => {
    console.log('push notification error:', e);
  });

  req.write(JSON.stringify(notification));
  req.end();
};

export default sendNotification;
