import "./App.css";

import { useQuery, gql, useLazyQuery } from "@apollo/client";

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
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_POSTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="container">
      <div className="row mt-3">
        {data &&
          data.posts.map((post, index) => {
            let odd = null;
            if (index / 2 === 0) odd = "mb-3 mb-sm-0";
            return (
              <div className={`col-sm-6 mb-3 ${index + 1} `} key={post.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {post.id} &nbsp;
                      {post.title}
                    </h5>
                    <p className="card-text">
                      {post.author && post.author.id} is the ID and the author
                      is &nbsp; {post.author && post.author.firstName}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        <a
          href="#"
          className="btn btn-primary"
          onClick={() => {
            fetchPosts();
          }}
        >
          Fetch Posts
        </a>
        {JSON.stringify(posts)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DisplayPosts />
    </div>
  );
}

export default App;
