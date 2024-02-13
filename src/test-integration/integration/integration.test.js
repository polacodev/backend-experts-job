import { createTestClient } from 'apollo-server-testing';

import server from '../../index';

describe('Integration testing component', () => {
  const { mutate, query } = createTestClient(server);

  // TEST USERS
  describe('user component', () => {
    it('createUser mutation for first user', async () => {
      const CREATE_USER_1 = `
      mutation CreateUser($user: UserInput!) {
        createUser(user: $user) {
          name
          email
          password
          workarea
          status
          cellphone
        }
      }
    `;

      const response = await mutate({
        mutation: CREATE_USER_1,
        variables: {
          user: {
            name: 'ximena',
            email: 'ximena@gmail.com',
            password: 'sucmar123',
            cellphone: '67543214',
            workarea: 'developer',
            status: false,
            description: 'ximena description',
            knowledge: 'ximena knowledge',
          },
        },
      });
      expect(response).toMatchSnapshot();
    });

    it('createUser mutation for second user', async () => {
      const CREATE_USER_2 = `
      mutation CreateUser($user: UserInput!) {
        createUser(user: $user) {
          name
          email
          password
          workarea
          status
          cellphone
        }
      }
    `;

      const response = await mutate({
        mutation: CREATE_USER_2,
        variables: {
          user: {
            name: 'rolan',
            email: 'rolan@gmail.com',
            password: 'rolan123',
            cellphone: '67543214',
            workarea: 'developer',
            status: false,
            description: 'rolan description',
            knowledge: 'rolan knowledge',
          },
        },
      });
      expect(response).toMatchSnapshot();
    });

    it('getAllUsers query', async () => {
      const GET_ALL_USERS = `
      query GetUsers($search: SearchUserInput) {
        getUsers(search: $search) {
          name
          email
          password
          cellphone
          workarea
        }
      }
    `;

      const response = await query({
        query: GET_ALL_USERS,
        variables: {
          search: {
            name: {
              contains: 'la',
            },
          },
        },
      });
      expect(response).toMatchSnapshot();
    });

    it('getCustomUsers query using name field', async () => {
      const GET_ALL_USERS = `
      query GetUsers($search: SearchUserInput) {
        getUsers(search: $search) {
          name
          email
          password
          cellphone
          workarea
        }
      }
    `;

      const response = await query({
        query: GET_ALL_USERS,
        variables: {
          search: {
            workarea: {
              contains: 'dev',
            },
          },
        },
      });
      expect(response).toMatchSnapshot();
    });

    it('getCustomUsers query using status field', async () => {
      const GET_CUSTOM_FILTER = `
      query GetUsers($search: SearchUserInput) {
        getUsers(search: $search) {
          name
          email
          password
          cellphone
          workarea
        }
      }
    `;

      const response = await query({
        query: GET_CUSTOM_FILTER,
        variables: {
          search: {
            status: {
              eq: false,
            },
          },
        },
      });
      expect(response).toMatchSnapshot();
    });
  });

  // TEST AUTHENTICATION
  describe('authentication component', () => {
    it('get the user authentication', async () => {
      const GET_AUTHENTICATION = `
        query Authentication($auth: AuthInput!) {
          authentication(auth: $auth) {
            token
            isAuthenticated
          }
        }
      `;
      const response = await query({
        query: GET_AUTHENTICATION,
        variables: {
          auth: {
            email: 'marco.baltazar@gmail.com',
            password: 'elpepe',
          },
        },
      });
      expect(response).toMatchSnapshot();
    });
  });

  // NOTIFICATION TESTS
  // describe('Notification component', () => {
  // it('createNotification subscription for first notification', async () => {
  //   const CREATE_NOTIFICATION = `
  //     subscription UserAdded {
  //       userAdded {
  //         name
  //         email
  //         cellphone
  //         workarea
  //       }
  //     }
  //   `;

  //   const response = await query({ query: CREATE_NOTIFICATION });
  //   expect(response).toMatchSnapshot();
  // });

  // it('createNotification subscription for second notification', async () => {
  //   const CREATE_NOTIFICATION = `
  //     subscription createNotification {
  //       createNotification(notification: {
  //         user_id: "id_fake",
  //         message: "second notification"
  //       }) {
  //         user_id
  //         message
  //       }
  //     }
  //   `;

  //   const response = await query({ query: CREATE_NOTIFICATION });
  //   expect(response).toMatchSnapshot();
  // });

  //   it('getAllNotifications query', async () => {
  //     const GET_ALL_NOTIFICATIONS = `
  //       query GetNotifications {
  //         getNotifications {
  //           user_id
  //           createdBy
  //           message
  //           name
  //           email
  //         }
  //       }
  //     `;

  //     const response = await query({ query: GET_ALL_NOTIFICATIONS });
  //     expect(response).toMatchSnapshot();
  //   });

  //   it('getAllNotifications by user id query', async () => {
  //     const GET_ALL_NOTIFICATIONS_BY_USER_ID = `
  //       query GetNotificationsByUserId($id: ID!) {
  //         getNotificationsByUserId(_id: $id) {
  //           user_id
  //           createdBy
  //           message
  //           name
  //         }
  //       }
  //     `;

  //     const response = await query({
  //       query: GET_ALL_NOTIFICATIONS_BY_USER_ID,
  //       variables: {
  //         id: '61d820e106bbd50a38a40b05',
  //       },
  //     });
  //     expect(response).toMatchSnapshot();
  //   });
  // });

  // RATE COMPONENT
  describe('Rate component', () => {
    it('Get all Rates', async () => {
      const GET_ALL_RATES = `
        query GetRates {
          getRates {
            user_id
            ratedBy
            name
            rate
          }
        }
      `;
      const response = await query({ query: GET_ALL_RATES });
      expect(response).toMatchSnapshot();
    });

    it('Get Rate by User Id', async () => {
      const GET_RATE_BY_USER_ID = `
        query GetRatesByUserId($id: ID!) {
          getRatesByUserId(_id: $id) {
            _id
            user_id
            ratedBy
            name
            rate
          }
        }
      `;
      const response = await query({
        query: GET_RATE_BY_USER_ID,
        variables: {
          id: '61d820e106bbd50a38a40b05',
        },
      });
      expect(response).toMatchSnapshot();
    });

    it('Get Rate Average by User Id', async () => {
      const GET_RATE_AVERAGE_BY_USER_ID = `
        query GetRatesAverageByUserId($id: ID!) {
          getRatesAverageByUserId(_id: $id) {
            user_id
            averageRate
          }
        }
      `;
      const response = await query({
        query: GET_RATE_AVERAGE_BY_USER_ID,
        variables: {
          id: '61d820e106bbd50a38a40b05',
        },
      });
      expect(response).toMatchSnapshot();
    });
  });

  // CONTACT COMPONENT
  describe('Contacts component', () => {
    it('Get all Contacts', async () => {
      const GET_ALL_CONTACTS = `
          query GetContacts {
            getContacts {
              user_id
              createdBy
              name
              email
            }
          }
        `;
      const response = await query({ query: GET_ALL_CONTACTS });
      expect(response).toMatchSnapshot();
    });

    it('Get Contact by User Id', async () => {
      const GET_CONTACT_BY_USER_ID = `
        query GetContactsByUserId($id: ID!) {
          getContactsByUserId(_id: $id) {
            user_id
            createdBy
            name
            email
            cellphone
          }
        }
      `;
      const response = await query({
        query: GET_CONTACT_BY_USER_ID,
        variables: {
          id: '61d820e106bbd50a38a40b05',
        },
      });
      expect(response).toMatchSnapshot();
    });
  });
});
