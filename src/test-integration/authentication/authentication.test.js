import querystring from 'querystring';

import { API_URL, api } from '../services.config';

describe('authentication component', () => {
  it('get the user authentication', async () => {
    const query = `
    query auth {
      authentication(auth: {email: "userTest@gmail.com", password: "userTest"}) {
        isAuthenticated
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response.data).toMatchSnapshot();
  });
});
