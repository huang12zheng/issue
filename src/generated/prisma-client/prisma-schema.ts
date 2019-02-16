export const typeDefs = /* GraphQL */ `type AggregateQueryHash {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createQueryHash(data: QueryHashCreateInput!): QueryHash!
  updateManyQueryHashes(data: QueryHashUpdateManyMutationInput!, where: QueryHashWhereInput): BatchPayload!
  deleteManyQueryHashes(where: QueryHashWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  queryHashes(where: QueryHashWhereInput, orderBy: QueryHashOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QueryHash]!
  queryHashesConnection(where: QueryHashWhereInput, orderBy: QueryHashOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QueryHashConnection!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type QueryHash {
  _id: ID!
  query: String
}

type QueryHashConnection {
  pageInfo: PageInfo!
  edges: [QueryHashEdge]!
  aggregate: AggregateQueryHash!
}

input QueryHashCreateInput {
  _id: ID!
  query: String
}

type QueryHashEdge {
  node: QueryHash!
  cursor: String!
}

enum QueryHashOrderByInput {
  _id_ASC
  _id_DESC
  query_ASC
  query_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QueryHashPreviousValues {
  _id: ID!
  query: String
}

type QueryHashSubscriptionPayload {
  mutation: MutationType!
  node: QueryHash
  updatedFields: [String!]
  previousValues: QueryHashPreviousValues
}

input QueryHashSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QueryHashWhereInput
  AND: [QueryHashSubscriptionWhereInput!]
  OR: [QueryHashSubscriptionWhereInput!]
  NOT: [QueryHashSubscriptionWhereInput!]
}

input QueryHashUpdateManyMutationInput {
  _id: ID
  query: String
}

input QueryHashWhereInput {
  _id: ID
  _id_not: ID
  _id_in: [ID!]
  _id_not_in: [ID!]
  _id_lt: ID
  _id_lte: ID
  _id_gt: ID
  _id_gte: ID
  _id_contains: ID
  _id_not_contains: ID
  _id_starts_with: ID
  _id_not_starts_with: ID
  _id_ends_with: ID
  _id_not_ends_with: ID
  query: String
  query_not: String
  query_in: [String!]
  query_not_in: [String!]
  query_lt: String
  query_lte: String
  query_gt: String
  query_gte: String
  query_contains: String
  query_not_contains: String
  query_starts_with: String
  query_not_starts_with: String
  query_ends_with: String
  query_not_ends_with: String
  AND: [QueryHashWhereInput!]
  OR: [QueryHashWhereInput!]
  NOT: [QueryHashWhereInput!]
}

type Subscription {
  queryHash(where: QueryHashSubscriptionWhereInput): QueryHashSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  _id: ID!
  info: String
  mobile: String
  password: String
  userName: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  _id: ID!
  info: String
  mobile: String
  password: String
  userName: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  _id_ASC
  _id_DESC
  info_ASC
  info_DESC
  mobile_ASC
  mobile_DESC
  password_ASC
  password_DESC
  userName_ASC
  userName_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  _id: ID!
  info: String
  mobile: String
  password: String
  userName: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateManyMutationInput {
  _id: ID
  info: String
  mobile: String
  password: String
  userName: String
}

input UserWhereInput {
  _id: ID
  _id_not: ID
  _id_in: [ID!]
  _id_not_in: [ID!]
  _id_lt: ID
  _id_lte: ID
  _id_gt: ID
  _id_gte: ID
  _id_contains: ID
  _id_not_contains: ID
  _id_starts_with: ID
  _id_not_starts_with: ID
  _id_ends_with: ID
  _id_not_ends_with: ID
  info: String
  info_not: String
  info_in: [String!]
  info_not_in: [String!]
  info_lt: String
  info_lte: String
  info_gt: String
  info_gte: String
  info_contains: String
  info_not_contains: String
  info_starts_with: String
  info_not_starts_with: String
  info_ends_with: String
  info_not_ends_with: String
  mobile: String
  mobile_not: String
  mobile_in: [String!]
  mobile_not_in: [String!]
  mobile_lt: String
  mobile_lte: String
  mobile_gt: String
  mobile_gte: String
  mobile_contains: String
  mobile_not_contains: String
  mobile_starts_with: String
  mobile_not_starts_with: String
  mobile_ends_with: String
  mobile_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}
`