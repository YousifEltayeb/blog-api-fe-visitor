import { useEffect, useState, useContext, createContext } from "react";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
const Context = createContext();

export const AllPostsDataProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${VITE_SERVER_URL}/posts`, { method: "GET", mode: "cors" })
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return <Context.Provider value={posts}>{children}</Context.Provider>;
};

export const useAllPosts = () => useContext(Context);
