import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const StringSearchInput = new GraphQLInputObjectType({
  name: 'StringSearchInput',
  fields: () => ({
    contains: { type: GraphQLString },
  }),
});

const BooleanSearchInput = new GraphQLInputObjectType({
  name: 'BooleanSearchInput',
  fields: () => ({
    eq: { type: GraphQLBoolean },
  }),
});

const SearchUserInput = new GraphQLInputObjectType({
  name: 'SearchUserInput',
  fields: () => ({
    name: { type: StringSearchInput },
    email: { type: StringSearchInput },
    cellphone: { type: StringSearchInput },
    workarea: { type: StringSearchInput },
    status: { type: BooleanSearchInput },
  }),
});

export default SearchUserInput;
