import React from "react";

import NavbarContainer from "../NavbarConatiner";

import "./index.css";

const Address = () => {
  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <div className="navbar d-flex flex-row justify-content-center fixed-top">
        <NavbarContainer />
      </div>

      <div className="body-container d-flex flex-column justify-content-center align-items-center">
        <address className="text-center">
          <h2>YASH EVENTS</h2>
          <p className="events-address">33900 Adams Cove Suite 224, Port Martaburgh, Nebraska, USA - 99700.</p>
          <p className="events-mobile">+1.865.387.7556</p>
        </address>
      </div>
    </div>
  );
};

export default Address;
