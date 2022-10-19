import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, getPostById } from "../api/posts";

const SinglePostView = ({ token }) => {
  const { postId } = useParams();

  const [singlePost, setSinglePost] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const findPostById = async () => {
      const post = await getPostById(postId);
      setSinglePost(post);
    };
    findPostById();
  }, []);

  const deletePost = async () => {
    const result = await deletePostById(singlePost._id, token);
    console.log(singlePost._id);
    navigate("/");
  };

  console.log(singlePost);

  return (
    <div>
      <div>{singlePost.title}</div>
      <div>{singlePost.description}</div>
      <div>{singlePost.price}</div>
      <div>{singlePost.willDeliver}</div>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};

export default SinglePostView;
