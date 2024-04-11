import React, { useState } from "react";

import NavbarContainer from "../NavbarConatiner";

import "./index.css";

export const BookEvent = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventStatus, setEventStatus] = useState(false);

  function confirmEvent(e) {
    e.preventDefault();

    if (fromDate === "" || toDate === "" || eventType === "") {
      alert("Please fill all inputs...");
    } else {
      setFromDate("");
      setToDate("");
      setEventType("");
      setEventStatus(true);
    }
  }

  const onChangeFromDate = (e) => {
    setFromDate(e.target.value);
    setEventStatus(false);
  };

  const onChangeToDate = (e) => {
    setToDate(e.target.value);
    setEventStatus(false);
  };

  const onChangeEventType = (e) => {
    setEventType(e.target.value);
    setEventStatus(false);
  };

  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <div className="navbar d-flex flex-row justify-content-center fixed-top">
        <NavbarContainer />
      </div>

      <div className="body-container d-flex flex-column align-items-center">
        <form className="book-event-form" onSubmit={confirmEvent}>
          <div className="book-event-input-container d-flex flex-column">
            <label htmlFor="fromDate">From</label>
            <input
              id="fromDate"
              type="date"
              name="fromDate"
              value={fromDate}
              placeholder="dd-mm-yyyy"
              onChange={onChangeFromDate}
            />
          </div>

          <div className="book-event-input-container d-flex flex-column">
            <label htmlFor="toDate">To</label>
            <input
              id="toDate"
              type="date"
              name="toDate"
              value={toDate}
              placeholder="dd-mm-yyyy"
              onChange={onChangeToDate}
            />
          </div>

          <div className="book-event-input-container d-flex flex-column">
            <label htmlFor="eventType">Event Type</label>
            <input
              id="eventType"
              type="text"
              name="eventType"
              value={eventType}
              placeholder="Enter Event Type..."
              onChange={onChangeEventType}
            />
          </div>

          <button type="submit" className="confirm-book-event-button">
            Book Event
          </button>

          {eventStatus && (
            <p className="event-status-msg">
              Your Event is Successfully Booked. Thank You!!!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
