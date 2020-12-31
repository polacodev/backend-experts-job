import querystring from 'querystring';

import { API_URL, api } from '../services.config';

describe('user component', () => {
  it('addNotification subscription for first notification', async () => {
    const query = `
    subscription addNotification {
      addNotification(notification: {
        user_id: "id_fake",
        message: "first notification"
      }) {
        user_id
        message
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response.data).toMatchSnapshot();
  });

  it('addNotification subscription for second notification', async () => {
    const query = `
    subscription addNotification {
      addNotification(notification: {
        user_id: "id_fake",
        message: "second notification"
      }) {
        user_id
        message
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response.data).toMatchSnapshot();
  });

  it('getAllNotifications query', async () => {
    const query = `
    query getAllNotifications {
      getNotifications {
        user_id
        message
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response.data).toMatchSnapshot();
  });
});
