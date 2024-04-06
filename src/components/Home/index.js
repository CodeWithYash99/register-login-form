import React from "react";

import NavbarContainer from "../NavbarConatiner";

import "./index.css";

const eventContent = [
  {
    id: 1,
    eventType: "Event Theme",
    eventDescription:
      "Determine a theme that ties all elements of the event together, such as a color scheme, concept, or message.",
  },
  {
    id: 2,
    eventType: "Event Schedule",
    eventDescription:
      "Create a detailed schedule outlining key activities, speakers, and breaks to keep attendees engaged.",
  },
  {
    id: 3,
    eventType: "Event Marketing",
    eventDescription:
      "Develop compelling marketing materials, including social media posts, email campaigns, and promotional videos.",
  },
  {
    id: 4,
    eventType: "Event Decor",
    eventDescription:
      "Consider how to decorate the event space to reflect the theme and create a welcoming atmosphere.",
  },
  {
    id: 5,
    eventType: "Event Activities",
    eventDescription:
      "Plan interactive activities or entertainment to keep attendees entertained and engaged throughout the event.",
  },
  {
    id: 6,
    eventType: "Event Speakers",
    eventDescription:
      "Invite knowledgeable and engaging speakers to share insights and expertise with attendees.",
  },
  {
    id: 7,
    eventType: "Event Catering",
    eventDescription:
      "Arrange for delicious food and beverages to keep attendees satisfied and energized.",
  },
  {
    id: 8,
    eventType: "Event Swag",
    eventDescription:
      "Consider providing branded merchandise or giveaways as souvenirs for attendees to remember the event.",
  },
  {
    id: 9,
    eventType: "Event Networking",
    eventDescription:
      "Facilitate networking opportunities for attendees to connect, share ideas, and build relationships.",
  },
  {
    id: 10,
    eventType: "Event Follow-Up",
    eventDescription:
      "Don't forget to follow up with attendees after the event with a thank you message or survey to gather feedback for future events.",
  },
];

const Home = () => {
  return (
    <div className="home-bg-container d-flex flex-column align-items-center">
      <div className="navbar d-flex flex-row justify-content-center fixed-top">
        <NavbarContainer />
      </div>

      <div className="body-container">
        <h3 className="home-heading text-center">
          Here are some of events we are dealing with
        </h3>

        <ul>
          {eventContent.map((each) => {
            return (
              <li key={each.id}>
                <h2>{each.eventType}: </h2>
                <p>{each.eventDescription}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
