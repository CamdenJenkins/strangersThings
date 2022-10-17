import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign-up</Link>
    </div>
  );
};

export default NavBar;
