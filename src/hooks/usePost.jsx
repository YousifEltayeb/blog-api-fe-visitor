import { useEffect, useState, useContext, createContext } from "react";
import { useParams } from "react-router";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const usePost = () => {
  const [post, setPost] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();
  useEffect(() => {
    fetch(`${VITE_SERVER_URL}/posts/${postId}`, { method: "GET", mode: "cors" })
      .then((data) => data.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [postId]);
  return { post, error, loading };
};
