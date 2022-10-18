import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setToken } = useAuth();

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>

      {user.username === "Guest" ? (
        <>
          {""}
          <span>
            <Link to="/auth/register">Sign-up</Link>
          </span>
          <span>
            <Link to="/auth/login">Login</Link>
          </span>
        </>
      ) : null}

      {user.username !== "Guest" ? (
        <span>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
              navigate("/auth/login");
            }}
          >
            Log Out
          </button>
        </span>
      ) : null}
    </div>
  );
};

export default NavBar;
