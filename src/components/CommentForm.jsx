import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
const CommentForm = ({ postId }) => {
  const handleSubmit = async (formData) => {
    await fetch(`${VITE_SERVER_URL}/comments/${postId}`, {
      mode: "cors",
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => {
        console.error(response);
        if (response.status !== 200) {
          return <div>Error: {response.statusText}</div>;
        }
      })
      .then(() => window.location.reload())
      .catch((err) => console.error(err));
  };
  return (
    <form action={handleSubmit} class="flex gap-4 flex-col  p-14">
      <legend>Post your comment below</legend>
      <label htmlFor="name">Name:</label>
      <Input type="text" name="name" id="name" required />
      <label htmlFor="conent">Comment:</label>
      <Input name="content" id="content" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default CommentForm;
