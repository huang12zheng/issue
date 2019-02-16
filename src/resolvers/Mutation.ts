// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from '../generated/graphqlgen'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  },
  login: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  },
  createUser: (parent, args, ctx) => {
    // return ctx.db.createUser(args);
    throw new Error('Resolver not implemented')
  },
  updateManyUsers: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  },
  deleteManyUsers: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  },
}
