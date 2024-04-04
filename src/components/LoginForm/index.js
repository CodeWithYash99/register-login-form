import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Client";

import "./index.css";

const LoginForm = (props) => {
  const { setToken } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handlerSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      setToken(data);
      navigate("/home");

      if (email !== "" && password !== "") {
        setEmail("");
        setPassword("");
      } else {
        if (email === "" && password === "") {
          alert("Please Provide the Details...");
        } else if (email === "") {
          alert("Please Enter your Email...");
        } else if (password === "") {
          alert("Please Enter your Password...");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  function handlerLoginEmail(e) {
    setEmail(e.target.value);
  }

  function handlerLoginPassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>USER LOGIN</h2>
        <form onSubmit={handlerSubmitLogin}>
          <div className="login-input-container">
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              type="text"
              value={email}
              placeholder="Enter Email"
              onChange={handlerLoginEmail}
              required
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={handlerLoginPassword}
              required
            />
          </div>
          <button type="submit">LogIn</button>
          <p>Forgot Password?</p>
        </form>
      </div>

      <div className="sign-up-card">
        <div>
          <h1>New here?</h1>
          <p>Sign up and discover more...</p>
        </div>
        <Link to="/register" className="sign-link">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
