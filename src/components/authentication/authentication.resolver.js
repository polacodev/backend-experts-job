import { GraphQLNonNull } from 'graphql';

import authUserAPI from './authentication.api';
import AuthInput from '../../types/auth.type';
import authType from './authentication.schema';

const authentication = {
  type: authType,
  args: {
    auth: { type: new GraphQLNonNull(AuthInput) },
  },
  resolve: (obj, args) => authUserAPI(args),
};

export default authentication;
