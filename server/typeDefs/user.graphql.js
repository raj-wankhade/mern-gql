const user = `#gql
    type UserCreateResponse{
        username: String!
        password: String!
        email: String!
    }

    type Mutation {
        userCreate: UserCreateResponse!
    }

`;

export default user;
