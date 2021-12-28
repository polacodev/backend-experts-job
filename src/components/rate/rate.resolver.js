import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} from 'graphql';

import RateInput from '../../types/rate.type';
import {
  createRateAPI,
  deleteRateAPI,
  getAllRatesAPI,
  getRatesByUserIdAPI,
  getRatesAverageByUserIdAPI,
} from './rate.api';
import { RateType, RateAverageType } from './rate.schema';

export const createRate = {
  type: RateType,
  args: {
    rate: { type: new GraphQLNonNull(RateInput) },
  },
  resolve: async (obj, args) => {
    const data = await createRateAPI(args);
    return data;
  },
};

export const deleteRate = {
  type: RateType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => deleteRateAPI(args),
};

export const getRates = {
  type: new GraphQLList(RateType),
  resolve: () => getAllRatesAPI(),
};

export const getRatesByUserId = {
  type: new GraphQLList(RateType),
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getRatesByUserIdAPI(args),
};

export const getRatesAverageByUserId = {
  type: RateAverageType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (obj, args) => getRatesAverageByUserIdAPI(args),
};
