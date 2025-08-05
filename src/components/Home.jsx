import { useAllPosts } from "../hooks/useAllPosts.jsx";
import Markdown from "react-markdown";
import { Link } from "react-router";
import Skeleton from "./Skeleton.jsx";
function Home() {
  const { posts, error, loading } = useAllPosts();
  if (loading) {
    return <Skeleton />;
  }
  if (error) {
    return (
      <>
        ERROR: <br />
        {error.statusText}
      </>
    );
  }
  return (
    <main class="min-h-full m-auto text-left ">
      {posts.map((post) => {
        return (
          <li key={post.id} class=" list-none">
            <Link class=" font-bold hover:underline" to={`/posts/${post.id}`}>
              <Markdown>{post.title}</Markdown>
            </Link>{" "}
            <br />
          </li>
        );
      })}
    </main>
  );
}
export default Home;
