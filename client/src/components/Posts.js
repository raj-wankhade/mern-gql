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

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_POSTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="container">
      <div className="row mt-3">
        {data &&
          data.posts.map((post, index) => {
            return (
              <div className={`col-6 mb-3 ${index + 1} `} key={post.id}>
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

        <button
          href="#"
          className="btn btn-primary col-6 mx-auto"
          onClick={() => {
            fetchPosts();
          }}
        >
          Fetch Posts
        </button>
        {JSON.stringify(posts)}
      </div>
    </div>
  );
}

export default Posts;
