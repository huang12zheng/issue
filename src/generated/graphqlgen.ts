// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql'
import {
  User,
  QueryHash,
  BatchPayload,
  UserSubscriptionPayload,
  UserPreviousValues,
} from './prisma-client'
import { AuthPayload, MutationResult } from '../addTypes'
import { Context } from '../utils'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export namespace QueryResolvers {
  export const defaultResolvers = {}

  export interface QueryHashWhereInput {
    _id?: string | null
    _id_not?: string | null
    _id_in?: string[] | null
    _id_not_in?: string[] | null
    _id_lt?: string | null
    _id_lte?: string | null
    _id_gt?: string | null
    _id_gte?: string | null
    _id_contains?: string | null
    _id_not_contains?: string | null
    _id_starts_with?: string | null
    _id_not_starts_with?: string | null
    _id_ends_with?: string | null
    _id_not_ends_with?: string | null
    query?: string | null
    query_not?: string | null
    query_in?: string[] | null
    query_not_in?: string[] | null
    query_lt?: string | null
    query_lte?: string | null
    query_gt?: string | null
    query_gte?: string | null
    query_contains?: string | null
    query_not_contains?: string | null
    query_starts_with?: string | null
    query_not_starts_with?: string | null
    query_ends_with?: string | null
    query_not_ends_with?: string | null
    AND?: QueryHashWhereInput[] | null
    OR?: QueryHashWhereInput[] | null
    NOT?: QueryHashWhereInput[] | null
  }

  export interface ArgsQueryHash {
    where: QueryHashWhereInput
  }

  export type UsersResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Array<User | null> | Promise<Array<User | null>>

  export type QueryHashResolver = (
    parent: undefined,
    args: ArgsQueryHash,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => QueryHash | Promise<QueryHash>

  export interface Type {
    users: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Array<User | null> | Promise<Array<User | null>>

    queryHash: (
      parent: undefined,
      args: ArgsQueryHash,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => QueryHash | Promise<QueryHash>
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    _id: (parent: User) => parent._id,
    info: (parent: User) => (parent.info === undefined ? null : parent.info),
    mobile: (parent: User) =>
      parent.mobile === undefined ? null : parent.mobile,
    password: (parent: User) =>
      parent.password === undefined ? null : parent.password,
    userName: (parent: User) =>
      parent.userName === undefined ? null : parent.userName,
  }

  export type _idResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type InfoResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type MobileResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type PasswordResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type UserNameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export interface Type {
    _id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    info: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    mobile: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    password: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    userName: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
  }
}

export namespace QueryHashResolvers {
  export const defaultResolvers = {
    _id: (parent: QueryHash) => parent._id,
    query: (parent: QueryHash) =>
      parent.query === undefined ? null : parent.query,
  }

  export type _idResolver = (
    parent: QueryHash,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type QueryResolver = (
    parent: QueryHash,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export interface Type {
    _id: (
      parent: QueryHash,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    query: (
      parent: QueryHash,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {}

  export interface UserCreateInput {
    _id: string
    info?: string | null
    mobile?: string | null
    password?: string | null
    userName?: string | null
  }
  export interface UserUpdateManyMutationInput {
    _id?: string | null
    info?: string | null
    mobile?: string | null
    password?: string | null
    userName?: string | null
  }
  export interface UserWhereInput {
    _id?: string | null
    _id_not?: string | null
    _id_in?: string[] | null
    _id_not_in?: string[] | null
    _id_lt?: string | null
    _id_lte?: string | null
    _id_gt?: string | null
    _id_gte?: string | null
    _id_contains?: string | null
    _id_not_contains?: string | null
    _id_starts_with?: string | null
    _id_not_starts_with?: string | null
    _id_ends_with?: string | null
    _id_not_ends_with?: string | null
    info?: string | null
    info_not?: string | null
    info_in?: string[] | null
    info_not_in?: string[] | null
    info_lt?: string | null
    info_lte?: string | null
    info_gt?: string | null
    info_gte?: string | null
    info_contains?: string | null
    info_not_contains?: string | null
    info_starts_with?: string | null
    info_not_starts_with?: string | null
    info_ends_with?: string | null
    info_not_ends_with?: string | null
    mobile?: string | null
    mobile_not?: string | null
    mobile_in?: string[] | null
    mobile_not_in?: string[] | null
    mobile_lt?: string | null
    mobile_lte?: string | null
    mobile_gt?: string | null
    mobile_gte?: string | null
    mobile_contains?: string | null
    mobile_not_contains?: string | null
    mobile_starts_with?: string | null
    mobile_not_starts_with?: string | null
    mobile_ends_with?: string | null
    mobile_not_ends_with?: string | null
    password?: string | null
    password_not?: string | null
    password_in?: string[] | null
    password_not_in?: string[] | null
    password_lt?: string | null
    password_lte?: string | null
    password_gt?: string | null
    password_gte?: string | null
    password_contains?: string | null
    password_not_contains?: string | null
    password_starts_with?: string | null
    password_not_starts_with?: string | null
    password_ends_with?: string | null
    password_not_ends_with?: string | null
    userName?: string | null
    userName_not?: string | null
    userName_in?: string[] | null
    userName_not_in?: string[] | null
    userName_lt?: string | null
    userName_lte?: string | null
    userName_gt?: string | null
    userName_gte?: string | null
    userName_contains?: string | null
    userName_not_contains?: string | null
    userName_starts_with?: string | null
    userName_not_starts_with?: string | null
    userName_ends_with?: string | null
    userName_not_ends_with?: string | null
    AND?: UserWhereInput[] | null
    OR?: UserWhereInput[] | null
    NOT?: UserWhereInput[] | null
  }

  export interface ArgsSignup {
    name: string
    password: string
  }

  export interface ArgsLogin {
    name: string
    password: string
  }

  export interface ArgsCreateUser {
    data: UserCreateInput
  }

  export interface ArgsUpdateManyUsers {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput | null
  }

  export interface ArgsDeleteManyUsers {
    where?: UserWhereInput | null
  }

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => AuthPayload | Promise<AuthPayload>

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => AuthPayload | Promise<AuthPayload>

  export type CreateUserResolver = (
    parent: undefined,
    args: ArgsCreateUser,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export type UpdateManyUsersResolver = (
    parent: undefined,
    args: ArgsUpdateManyUsers,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => BatchPayload | Promise<BatchPayload>

  export type DeleteManyUsersResolver = (
    parent: undefined,
    args: ArgsDeleteManyUsers,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => BatchPayload | Promise<BatchPayload>

  export interface Type {
    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => AuthPayload | Promise<AuthPayload>

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => AuthPayload | Promise<AuthPayload>

    createUser: (
      parent: undefined,
      args: ArgsCreateUser,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>

    updateManyUsers: (
      parent: undefined,
      args: ArgsUpdateManyUsers,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => BatchPayload | Promise<BatchPayload>

    deleteManyUsers: (
      parent: undefined,
      args: ArgsDeleteManyUsers,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => BatchPayload | Promise<BatchPayload>
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    user: (parent: AuthPayload) => parent.user,
  }

  export type TokenResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UserResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export interface Type {
    token: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    user: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>
  }
}

export namespace BatchPayloadResolvers {
  export const defaultResolvers = {
    count: (parent: BatchPayload) => parent.count,
  }

  export type CountResolver = (
    parent: BatchPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type {
    count: (
      parent: BatchPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {}

  export type UserResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) =>
      | AsyncIterator<UserSubscriptionPayload | null>
      | Promise<AsyncIterator<UserSubscriptionPayload | null>>
    resolve?: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) =>
      | UserSubscriptionPayload
      | null
      | Promise<UserSubscriptionPayload | null>
  }

  export interface Type {
    user: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) =>
        | AsyncIterator<UserSubscriptionPayload | null>
        | Promise<AsyncIterator<UserSubscriptionPayload | null>>
      resolve?: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo,
      ) =>
        | UserSubscriptionPayload
        | null
        | Promise<UserSubscriptionPayload | null>
    }
  }
}

export namespace UserSubscriptionPayloadResolvers {
  export const defaultResolvers = {
    mutation: (parent: UserSubscriptionPayload) => parent.mutation,
    node: (parent: UserSubscriptionPayload) => parent.node,
    updatedFields: (parent: UserSubscriptionPayload) => parent.updatedFields,
    previousValues: (parent: UserSubscriptionPayload) => parent.previousValues,
  }

  export type MutationResolver = (
    parent: UserSubscriptionPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => MutationType | Promise<MutationType>

  export type NodeResolver = (
    parent: UserSubscriptionPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | null | Promise<User | null>

  export type UpdatedFieldsResolver = (
    parent: UserSubscriptionPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string[] | null | Promise<string[] | null>

  export type PreviousValuesResolver = (
    parent: UserSubscriptionPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => UserPreviousValues | null | Promise<UserPreviousValues | null>

  export interface Type {
    mutation: (
      parent: UserSubscriptionPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => MutationType | Promise<MutationType>

    node: (
      parent: UserSubscriptionPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | null | Promise<User | null>

    updatedFields: (
      parent: UserSubscriptionPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string[] | null | Promise<string[] | null>

    previousValues: (
      parent: UserSubscriptionPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => UserPreviousValues | null | Promise<UserPreviousValues | null>
  }
}

export namespace UserPreviousValuesResolvers {
  export const defaultResolvers = {
    _id: (parent: UserPreviousValues) => parent._id,
    info: (parent: UserPreviousValues) =>
      parent.info === undefined ? null : parent.info,
    mobile: (parent: UserPreviousValues) =>
      parent.mobile === undefined ? null : parent.mobile,
    password: (parent: UserPreviousValues) =>
      parent.password === undefined ? null : parent.password,
    userName: (parent: UserPreviousValues) =>
      parent.userName === undefined ? null : parent.userName,
  }

  export type _idResolver = (
    parent: UserPreviousValues,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type InfoResolver = (
    parent: UserPreviousValues,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type MobileResolver = (
    parent: UserPreviousValues,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type PasswordResolver = (
    parent: UserPreviousValues,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type UserNameResolver = (
    parent: UserPreviousValues,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export interface Type {
    _id: (
      parent: UserPreviousValues,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    info: (
      parent: UserPreviousValues,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    mobile: (
      parent: UserPreviousValues,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    password: (
      parent: UserPreviousValues,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    userName: (
      parent: UserPreviousValues,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
  }
}

export namespace MutationResultResolvers {
  export const defaultResolvers = {
    success: (parent: MutationResult) => parent.success,
  }

  export type SuccessResolver = (
    parent: MutationResult,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type {
    success: (
      parent: MutationResult,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type
  User: UserResolvers.Type
  QueryHash: QueryHashResolvers.Type
  Mutation: MutationResolvers.Type
  AuthPayload: AuthPayloadResolvers.Type
  BatchPayload: BatchPayloadResolvers.Type
  Subscription: SubscriptionResolvers.Type
  UserSubscriptionPayload: UserSubscriptionPayloadResolvers.Type
  UserPreviousValues: UserPreviousValuesResolvers.Type
  MutationResult: MutationResultResolvers.Type
}