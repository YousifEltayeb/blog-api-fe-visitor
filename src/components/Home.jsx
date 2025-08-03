import { useEffect, useState } from "react";
import { useAllPosts } from "../hooks/useAllPosts.jsx";

function Home() {
  const posts = useAllPosts();
  console.log(posts);
  return <h1>tf</h1>;
}
export default Home;
