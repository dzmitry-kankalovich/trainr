import { User } from "../gql-types";

interface Data {
    users: User[]
}

export const data: Data = {
    users: [
        {
            id: "1",
            firstName: "Dima",
            lastName: "K",
            email: "dkankalovich@test.com",
            phone: "1-111-111-1111"
        },
        {
            id: "2",
            firstName: "Kate",
            "lastName": "U",
            email: "kateu@test.com"
        }
    ]
}