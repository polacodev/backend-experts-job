/* eslint-disable no-underscore-dangle */
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import { getRatesAverageByUserIdAPI } from '../rate/rate.api';
import { RateAverageType } from '../rate/rate.schema';

const userType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    cellphone: { type: GraphQLString },
    workarea: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    knowledge: { type: GraphQLString },
    rate: {
      type: RateAverageType,
      resolve: (obj) => getRatesAverageByUserIdAPI(obj),
    },
  }),
});

export default userType;
