import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar-bg-container d-flex flex-row justify-content-center align-items-center">
      <div className="navbar-container d-flex flex-row align-items-center">
        <div className="logo-container">
          <h2 className="name-logo">YASH EVENTS</h2>
        </div>

        <ul className="navbar-items-container d-flex flex-row justify-content-evenly align-items-center">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/address">
              Address
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>

        <div className="book-event-container">
          <button className="book-event-button">Book Event</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
