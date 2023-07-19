import { useQuery, gql, useLazyQuery } from "@apollo/client";
import PageTitle from "../components/PageTitle";

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

  if (error) return <p>{error.message}</p>;

  if (loading) return <p>Loading ...</p>;

  return (
    <section className="top py-3 px-3 mb-5 mb-lg-10">
      <div className="container text-dark">
        <PageTitle loading={loading} title={"Posts"} />
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Author Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.posts.map((post) => {
                      return (
                        <tr key={post.id}>
                          <th scope="row">1</th>
                          <td>{post.title}</td>
                          <td>{post.author && post.author.id}</td>
                          <td>{post.author && post.author.firstName}</td>
                          <td>
                            <button
                              href="#"
                              className="btn btn-dark"
                              onClick={() => {
                                fetchPosts();
                              }}
                            >
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button
                              href="#"
                              className="btn btn-danger"
                              onClick={() => {
                                fetchPosts();
                              }}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="d-block">
              <button
                href="#"
                className="btn btn-dark mt-3"
                onClick={() => {
                  fetchPosts();
                }}
              >
                Fetch Posts
              </button>
            </div>
            {JSON.stringify(posts)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
