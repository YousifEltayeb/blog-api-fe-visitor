import { usePost } from "../hooks/usePost.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
function Posts() {
  const { post, error, loading } = usePost();
  if (loading) {
    return <>Loading...</>;
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
    <section class="text-left mb-auto px-32 p-8">
      <h1 class="text-4xl text-center m-8 p-8">{post.title}</h1>
      <article class="text-2xl">
        <Markdown>{post.content}</Markdown>
      </article>

      <form
        action="/comments"
        method="POST"
        class="flex gap-4 flex-col align-center text-center p-24 px-36"
      >
        <legend>Post your comment below</legend>
        <label htmlFor="name">Name:</label>
        <Input type="text" for="name" id="name" class="border min-h-8 " />
        <label htmlFor="conent">Comment:</label>
        <Input name="content" id="content" class="border min-h-12" />
        <Button class="text-1xl hover:cursor-pointer border">Submit</Button>
      </form>
    </section>
  );
}
export default Posts;
