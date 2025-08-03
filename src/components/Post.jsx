import { usePost } from "../hooks/usePost.jsx";
function Posts() {
  const { post, error, loading } = usePost();
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    console.log(error);
    if (error.status === 404) {
      return <>NOT FOUND</>;
    } else
      return (
        <>
          ERROR: <br />
          {error.statusText}
        </>
      );
  }
  return <p>{post.content}</p>;
}
export default Posts;
