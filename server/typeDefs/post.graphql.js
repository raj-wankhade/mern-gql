const post = `#gql

    type Post {
        id: Int!
        author: [Author]
        title: String
        votes: Int
    }

    # the schema allows the following query:
    type Query {
        posts: [Post]
        totalPosts: Int!
    }

    #Mutations
    type Mutation {
        newPost(author: Int!, title: String, votes: Int): Post!
    }
    # to run the query in playground
    # mutation {
    #    newPost(author:3,title: "some new title", votes: 3){
    #        id
    #        title
    #    }
    # }

`;

export default post;
