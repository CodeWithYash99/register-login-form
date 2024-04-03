import React, { useState } from "react";

import "./index.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [requiredField, setRequiredField] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (password === repeatPassword) {
      if (password.length === 8) {
        setFullName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setMobile("");
        setAge("");
        setGender("Male");
        alert("Your Details are Recorded");
      } else {
        alert("Password length atleast 8 letters");
      }
    } else {
      alert("Password Not Matched");
    }
  };

  function onChangeFullName(e) {
    setFullName(e.target.value);
  }

  function onBlurFullName() {
    if (fullName !== "") {
      setRequiredField("");
    } else {
      setRequiredField("errMsg");
    }
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangeRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }

  function onChangeMobile(e) {
    setMobile(e.target.value);
  }

  function onChangeAge(e) {
    setAge(e.target.value);
  }

  function onChangeMale() {
    setGender("Male");
  }

  function onChangeFemale() {
    setGender("Female");
  }

  return (
    <div className="register-container">
      <h1 className="register-heading">REGISTER</h1>

      {/* Form Container Starts Here */}
      <form type="submit" onSubmit={handlerSubmit}>
        {/* Full Name Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="fullName">
            Full Name
          </label>
          <input
            className={`input ${requiredField}`}
            id="fullName"
            type="text"
            value={fullName}
            name="fullName"
            placeholder="Enter Full Name"
            onChange={onChangeFullName}
            onBlur={onBlurFullName}
          />
        </div>

        {/* Email Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            value={email}
            name="email"
            placeholder="Enter Email"
            onChange={onChangeEmail}
            required
          />
        </div>

        {/* Password Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            value={password}
            name="password"
            placeholder="Enter Password"
            onChange={onChangePassword}
            required
          />
        </div>

        {/* Repeat Password Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="repeatPassword">
            Repeat Password
          </label>
          <input
            className="input"
            id="repeatPassword"
            type="password"
            value={repeatPassword}
            name="repeatPassword"
            placeholder="Enter Repeat Password"
            onChange={onChangeRepeatPassword}
            required
          />
        </div>

        {/* Mobile Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            className="input"
            id="mobile"
            type="tel"
            value={mobile}
            name="mobile"
            placeholder="Enter Mobile Number"
            onChange={onChangeMobile}
            required
          />
        </div>

        {/* Age Input Container */}
        <div className="input-container">
          <label className="label-name" htmlFor="age">
            Age
          </label>
          <input
            className="input"
            id="age"
            type="number"
            value={age}
            name="age"
            placeholder="Enter Age"
            onChange={onChangeAge}
            required
          />
        </div>

        {/* Gender Input Container */}
        <div className="input-container">
          <p className="gender-name">Gender</p>
          <div className="gender-block">
            <input
              type="radio"
              id="male"
              name="gender"
              value={gender}
              onChange={onChangeMale}
              checked
            />
            <label className="gender-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="gender-block">
            <input
              type="radio"
              id="female"
              name="gender"
              value={gender}
              onChange={onChangeFemale}
            />
            <label className="gender-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        {/* Checkbox Input Container */}
        <div className="input-check-box">
          <input
            className="check-box"
            id="checkBox"
            type="checkbox"
            name="checkbox"
            required
          />
          <label className="check-box-label-name" htmlFor="checkBox">
            I agree to terms & conditions
          </label>
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* Form Container Ends Here */}

      <p className="already-registered">
        Already Registered?
        <Link to="/register-login-form" className="login-link">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
