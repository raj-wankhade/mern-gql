const post = `#gql

    type Post {
        id: Int!
        author: Author
        title: String
        votes: Int
    }

    # the schema allows the following query:
    type Query {
        posts: [Post]
        totalPosts: Int!
    }

    #Input types
    input InputPost {
        authorId: Int
        title: String
        votes: Int
    }

    #Mutations
    type Mutation {
        newPost(input: InputPost): Post!
    }
    # to run the query in playground
    # mutation {
    #    newPost(authorId:3,title: "some new title", votes: 3){
    #        id
    #        title
    #    }
    # }

`;

export default post;
