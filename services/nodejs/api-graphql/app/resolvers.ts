import { Resolvers, QueryResolvers, UserResolvers, RequireFields, QueryUserArgs, User, ResolversParentTypes, Address, Country, UserAddress, } from "./gql-types";
import { data } from "./data";
import { GraphQLResolveInfo } from "graphql";

export const queryResolvers: QueryResolvers = {
    me: (obj: any, arg: any, ctx: any): User => data.users[0],
    user: (
        parent: any,
        arg: RequireFields<QueryUserArgs, 'id'>,
        ctx: any, info: GraphQLResolveInfo): User | null => {
        const user = data.users.find((user) => user.id === arg.id);
        return user ? user : null;
    }
}

export const userResolvers: UserResolvers = {
    addresses: (parent: User, arg: any, ctx: any): UserAddress[] => [{
        id: "1",
        address: {
            addressLine1: "3035 Whatever ave",
            city: "Los Amigos",
            state: "Florida",
            country: Country.Us,
            zip: "12345"
        },
        default: true
    }]
}

export const allResolvers: Resolvers = {
    Query: queryResolvers,
    User: userResolvers
}
