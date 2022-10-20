import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, fetchMessage, getPostById } from "../api/posts";
import styles from "../styles/SinglePost.module.css";
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
    <div className={styles.singlePostCard}>
      <h1 className={styles.title}>{singlePost.title}</h1>
      <div className={styles.description}>{singlePost.description}</div>
      <div className={styles.price}>Price: {singlePost.price}</div>
      <div>{singlePost.willDeliver}</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await fetchMessage(token);
          console.log(result.data);
        }}
      >
        <label className={styles.message}>Message User:</label>
        <input type="text"></input>
        <button
          id={styles.submit}
          className="pure-button pure-button-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        id={styles.button}
        className="pure-button pure-button-primary"
        onClick={deletePost}
      >
        Delete
      </button>
    </div>
  );
};

export default SinglePostView;
