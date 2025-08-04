import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
const CommentForm = ({ postId }) => {
  return (
    <form
      action={`${VITE_SERVER_URL}/comments/${postId}`}
      method="POST"
      class="flex gap-4 flex-col  p-14 "
    >
      <legend>Post your comment below</legend>
      <label htmlFor="name">Name:</label>
      <Input type="text" name="name" id="name" />
      <label htmlFor="conent">Comment:</label>
      <Input name="content" id="content" />
      <Button>Submit</Button>
    </form>
  );
};
export default CommentForm;
