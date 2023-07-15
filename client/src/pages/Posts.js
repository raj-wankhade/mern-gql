import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

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

  const { state, dispatch } = useContext(AuthContext);

  const updateUser = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "raj wankhade",
    });
  };

  if (error) return <p>{error.message}</p>;

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="d-flex justify-content-center">
      <div className="container px-4">
        <div className="row gx-5 p-3">
          <h3>Posts</h3>
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
            className="btn btn-primary col-3 mx-auto"
            onClick={() => {
              fetchPosts();
            }}
          >
            Fetch Posts
          </button>
          {JSON.stringify(posts)}
        </div>
        <div className="row gx-5 p-3">
          <div>
            <div className="row gx-5 p-3">
              User is : {JSON.stringify(state.user)}
            </div>
            <button
              href="#"
              className="btn bg-dark text-white col-3 mx-auto"
              onClick={updateUser}
            >
              Update User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
