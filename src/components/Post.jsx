import { usePost } from "../hooks/usePost.jsx";
import CommentForm from "./CommentForm.jsx";
import Comments from "./Comments.jsx";
import Skeleton from "./Skeleton.jsx";
import Markdown from "react-markdown";
function Posts() {
  const { post, error, loading } = usePost();
  if (loading) {
    return <Skeleton />;
  }
  if (error) {
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
  return (
    <>
      <main class="text-left mb-auto px-32 p-8 border-b">
        <div class="text-center">
          <Markdown>{post.title}</Markdown>
        </div>
        <br />
        <span>Author: {post.Author.name}</span>
        <br />
        <article>
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
      <section>
        <CommentForm postId={post.id} />
      </section>
      <section class="min-w-full">
        <h2 class="text-2xl">Comments</h2>
        <Comments comments={post.comments} />
      </section>
    </>
  );
}
export default Posts;
