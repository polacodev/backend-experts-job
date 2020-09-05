import querystring from 'querystring';

import { API_URL, api } from '../services.config';

describe('aaaa', () => {
  it('aaaa', async () => {
    const query = `
    query getAll {
       getUsers {
         ...User
       }
     }
    
     fragment User on UserType {
       _id
       name
       email
       workarea
       status
       cellphone
     }
  `;
    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });
});
