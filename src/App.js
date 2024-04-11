import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import About from "./components/About";
import Address from "./components/Address";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

import "./App.css";
import { BookEvent } from "./components/BookEvent";

const App = () => {
  const [token, setToken] = useState(false);

  const login = JSON.parse(window.localStorage.getItem("isLogedIn"));

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
          path="/register-login-form"
          element={<LoginForm setToken={setToken} />}
        />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/" element={login && <Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/book-event" element={<BookEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
