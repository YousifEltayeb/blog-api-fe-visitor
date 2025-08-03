import { usePost } from "../hooks/usePost.jsx";
function Posts() {
  const post = usePost();
  console.log(post);
  return <> post</>;
}
export default Posts;
