import React from "react";
import NavbarContainer from "../NavbarConatiner";

import "./index.css";

const About = () => {
  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <div className="navbar d-flex flex-row justify-content-center fixed-top">
        <NavbarContainer />
      </div>

      <div className="body-container d-flex flex-column align-items-center">
        <h3 className="about-heading">About YASH EVENTS</h3>
        <p className="about-description">
          "Welcome to YASH EVENTS, where inspiration meets innovation! Our
          annual/quarterly/monthly event brings together industry leaders,
          professionals, and enthusiasts to connect, learn, and grow. With a
          focus on events, we curate an engaging program featuring top speakers,
          interactive workshops, and networking opportunities. Join us for an
          unforgettable experience filled with knowledge sharing, collaboration,
          and fun. Whether you're a seasoned expert or a curious beginner, YASH
          EVENTS has something for everyone. Don't miss out on this opportunity
          to be part of a dynamic community dedicated to reach maximum people in
          a easy way to understand and make booking from every where. See you
          there!" Feel free to customize this template to better suit your
          specific event details and audience!
        </p>
      </div>
    </div>
  );
};

export default About;
