import { GraphQLNonNull } from 'graphql';

import authUser from './authentication.api';
import AuthInput from '../../types/auth.type';
import authType from './authentication.schema';

const authentication = {
  type: authType,
  args: {
    auth: { type: new GraphQLNonNull(AuthInput) },
  },
  resolve: (obj, args) => authUser(args),
};

export default authentication;
