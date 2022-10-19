import { useEffect, useState } from "react";
import { deletePostById, fetchPosts } from "../api/posts";

const Posts = ({ token }) => {
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
  const deletePost = async () => {
    const result = await deletePostById(posts.post._id, token);
    console.log(posts.post._id);
  };
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <button onClick={deletePost}>Delete Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
