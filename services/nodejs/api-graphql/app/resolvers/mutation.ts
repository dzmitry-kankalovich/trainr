import { MutationResolvers, MutationCreateUserArgs, User } from "../gql-types";
import { data } from "../data/data";
import { v4 as uuidv4 } from 'uuid';

export const mutationResolvers: MutationResolvers = {
    createUser: (_, arg: MutationCreateUserArgs): User => {
        const user: User = {
            id: uuidv4(),
            ...arg.userInput
        }

        user.addresses = []
        if (arg.userInput.address) {
            user.addresses.push({
                id: uuidv4(),
                ...arg.userInput.address
            })
        }

        // user.paymentMethods = []
        // if (arg.userInput.paymentMethod) {
        //     user.paymentMethods.push({
        //         id: "1",
        //         ...arg.userInput.paymentMethod
        //     })
        // }

        data.users.push(user)
        return user;
    }
}