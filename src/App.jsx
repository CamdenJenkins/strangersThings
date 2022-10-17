import { useEffect, useState } from "react";
import { fetchMe } from "./api/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Posts from "./components/Posts";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
