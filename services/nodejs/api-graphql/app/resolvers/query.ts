import { QueryResolvers, User, QueryUserArgs } from "../gql-types";
import { data } from "../data/data";

export const queryResolvers: QueryResolvers = {
    me: (): User => data.users[0],
    user: (_, arg: QueryUserArgs): User | null => {
        const user = data.users.find((user) => user.id === arg.id);
        return user ? user : null;
    },
    users: (): User[] | null => {
        return data.users;
    }
}