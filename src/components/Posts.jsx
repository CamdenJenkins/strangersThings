import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const recievePosts = async () => {
      const display = await fetchPosts();
      setPosts(display.data.posts);
      console.log(display);
    };
    recievePosts();
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
