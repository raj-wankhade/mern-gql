import "./App.css";

import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      author {
        firstName
        id
      }
      title
      id
    }
  }
`;

function DisplayPosts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Loading ...</p>;

  return (
    data &&
    data.posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.id}</h3>
          <p>Title: {post.title}</p>
          <br />
          <b>About this author:</b>
          {post.author && post.author.id} :{" "}
          {post.author && post.author.firstName}
          <br />
        </div>
      );
    })
  );
}

function App() {
  return (
    <div className="App">
      Helllooo
      <DisplayPosts />
    </div>
  );
}

export default App;
