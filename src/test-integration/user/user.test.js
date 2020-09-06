import querystring from 'querystring';

import { API_URL, api } from '../services.config';

describe('user component', () => {
  it('addUser mutation for first user', async () => {
    const query = `
    mutation addUser {
      addUser(user: { 
        name: "ximena",
        email: "ximena@gmail.com",
        password: "sucmar123",
        cellphone: "67543214",
        workarea: "developer",
        status: false
      }) {
        name
        email
        workarea
        status
        cellphone
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });

  it('addUser mutation for second user', async () => {
    const query = `
    mutation addUser {
      addUser(user: { 
        name: "rolan",
        email: "rolan@gmail.com",
        password: "rolan123",
        cellphone: "67543214",
        workarea: "developer",
        status: false
      }) {
        name
        email
        workarea
        status
        cellphone
      }
    }
    `;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });

  it('getAllUsers query', async () => {
    const query = `
    query getAllUsers {
      getUsers {
        ...User
      }
    }

    fragment User on UserType {
      name
      email
      workarea
      status
      cellphone
    }`;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });

  it('getCustomUsers query using name field', async () => {
    const query = `
    query customFilter {
      getCustomUsers(search: {name: {contains: "la"}}) {
        ...User
      }
    }

    fragment User on UserType {
      name
      email
      workarea
      status
      cellphone
    }`;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });

  it('getCustomUsers query using workarea field', async () => {
    const query = `
    query customFilter {
      getCustomUsers(search: {workarea: {contains: "deve"}}) {
        ...User
      }
    }

    fragment User on UserType {
      name
      email
      workarea
      status
      cellphone
    }`;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });

  it('getCustomUsers query using status field', async () => {
    const query = `
    query customFilter {
      getCustomUsers(search: {status: {eq: false}}) {
        ...User
      }
    }

    fragment User on UserType {
      name
      email
      workarea
      status
      cellphone
    }`;

    const response = await api.post(API_URL, querystring.stringify({ query }));
    expect(response).toMatchSnapshot();
  });
});
