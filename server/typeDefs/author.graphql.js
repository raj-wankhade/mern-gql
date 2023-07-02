const author = `#gql

    type Author {
        id: Int!
        firstName: String
        lastName: String
    }

    type Query {
        author(id: Int!): Author
    }

`;

export default author;
