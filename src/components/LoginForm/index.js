import React, { useState } from "react";

import "./index.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmitLogin = (event) => {
    event.preventDefault()
  }

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
        <Link to="/register" className='sign-link'>SIGN UP</Link>
      </div>
    </div>
  );
};

export default LoginForm;
