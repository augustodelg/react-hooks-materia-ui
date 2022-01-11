import { useEffect, useState } from "react";
import { getPost } from "../services/getPost";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPost().then((post) => setPosts(post));
  }, []);
  return { posts };
}
