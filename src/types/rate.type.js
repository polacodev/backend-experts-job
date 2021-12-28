import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const RateInput = new GraphQLInputObjectType({
  name: 'RateInput',
  fields: () => ({
    _id: { type: GraphQLID },
    ratedBy: { type: GraphQLID },
    name: { type: GraphQLString },
    rate: { type: GraphQLInt },
  }),
});

export default RateInput;
