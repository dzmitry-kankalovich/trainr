import { Resolvers } from "../gql-types";
import { userResolvers } from "./user";
import { queryResolvers } from "./query";
import { mutationResolvers } from "./mutation"

export const resolvers: Resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    User: userResolvers
}
