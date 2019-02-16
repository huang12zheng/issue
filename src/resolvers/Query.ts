// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  users: (parent, args, ctx) => {
    return ctx.db.users(args);
  },
  queryHash: async (parent, args, ctx) => {
    console.dir(args);
    console.dir(args.where);
    // console.log("where._id"+args.where._id);
    // console.dir({where:{_id:"5"}});
    // console.dir({where: args});
    // const req = await ctx.db.queryHashes(args);
    // console.dir(req);
    // return ctx.db.queryHashes({where: });
    return {"_id":"5","query":"dfsdaa"}
    // return req[0];
  },
}
