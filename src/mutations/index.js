import { GraphQLObjectType } from 'graphql';
import { addUser, updateUser, deleteUser } from '../user/user.resolver';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    updateUser,
    deleteUser,
  },
});

export default mutationType;
