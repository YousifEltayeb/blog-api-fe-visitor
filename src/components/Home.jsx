import { useAllPosts } from "../hooks/useAllPosts.jsx";
import { Link } from "react-router";
function Home() {
  const { posts, error, loading } = useAllPosts();
  if (loading) {
    return <>Loading...</>;
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
          <li key={post.id} class="mb-12 list-none">
            <Link
              class="text-3xl font-bold hover:underline"
              to={`/posts/${post.id}`}
            >
              {post.title}
            </Link>{" "}
            <br />
          </li>
        );
      })}
    </main>
  );
}
export default Home;
