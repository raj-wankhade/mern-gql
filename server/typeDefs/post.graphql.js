const post = `#gql

    type Post {
        id: Int!
        title: String
        author: String
        votes: Int
    }

    # the schema allows the following query:
    type Query {
        posts: [Post]
        totalPosts: Int!
    }
`;

export default post;
