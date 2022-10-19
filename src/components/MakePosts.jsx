import { useState } from "react";
import { makePost } from "../api/posts";
import { useNavigate } from "react-router-dom";

const NewPostForm = ({ token }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div>
      <form
        className="pure-form pure-form-stacked"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await makePost(
            token,
            title,
            description,
            price,
            willDeliver
          );
          navigate("/");
        }}
      >
        <h3>Create New Post</h3>
        <label>Title:</label>
        <input
          value={title}
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>Price:</label>
        <input
          value={price}
          type="text"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Delivery:</label>
        <input
          checked={willDeliver}
          type="checkbox"
          onChange={(e) => {
            setWillDeliver(e.target.checked);
          }}
        ></input>
        <label>Description:</label>
        <input
          value={description}
          type="text"
          placeholder=""
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button className="pure-button pure-button-primary" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
