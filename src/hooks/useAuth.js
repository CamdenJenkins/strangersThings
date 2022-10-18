import { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({ user: "Guest" });

  useEffect(() => {
    const getMe = async () => {
      console.log("Token before fetch");
      const result = await fetchMe(token);
      console.log(result);
      setUser(result.data);
    };
    if (token) {
      getMe();
    } else if (token === "") {
      setUser({ username: "Guest" });
    }
    console.log("in the useEffect");
  }, [token]);
  return {
    token,
    setToken,
    user,
    setUser,
  };
};

export default useAuth;
