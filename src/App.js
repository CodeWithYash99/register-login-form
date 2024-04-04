import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from './components/Home'
import NotFound from './components/NotFound'

import "./App.css";

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/register-login-form"
          element={<LoginForm setToken={setToken} />}
        />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
