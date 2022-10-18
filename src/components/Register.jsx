import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser, registerUser } from "../api/auth";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { method } = useParams();
  const navigate = useNavigate();
  const { setToken, token, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4>{user?.username}</h4>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          let result;

          if (method === "register") {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }
          console.log(result);
          console.log({ username, password });

          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="password"
        />
        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Register;
