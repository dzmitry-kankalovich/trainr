import { Resolvers, QueryResolvers, UserResolvers, QueryUserArgs, User, Country, UserAddress, } from "./gql-types";
import { data } from "./data";

export const queryResolvers: QueryResolvers = {
    me: (): User => data.users[0],
    user: (_, arg: QueryUserArgs): User | null => {
        const user = data.users.find((user) => user.id === arg.id);
        return user ? user : null;
    }
}

export const userResolvers: UserResolvers = {
    addresses: (parent: User): UserAddress[] => [{
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
