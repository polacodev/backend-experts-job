import {
  GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt,
} from 'graphql';

export const RateType = new GraphQLObjectType({
  name: 'RateType',
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLString },
    ratedBy: { type: GraphQLString },
    name: { type: GraphQLString },
    rate: { type: GraphQLInt },
  }),
});

export const RateAverageType = new GraphQLObjectType({
  name: 'RateAverageType',
  fields: () => ({
    user_id: { type: GraphQLString },
    averageRate: { type: GraphQLInt },
  }),
});
