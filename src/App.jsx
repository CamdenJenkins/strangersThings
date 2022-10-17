import { useEffect, useState } from "react";
import { fetchMe } from "./api/auth";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      console.log("Token before fetch");
      const result = await fetchMe(token);
      console.log(result);
      setUser(result.data);
    };
    if (token) {
      getMe();
    }
    console.log("in the useEffect");
  }, [token]);

  return (
    <div className="App">
      <h4>{user?.username}</h4>
      <Register setToken={setToken} />
    </div>
  );
}

export default App;
