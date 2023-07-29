import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="section">
      <h1>
        Our <span>Services</span>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. standard dummy text ever since the 1500s, when an unknown.
      </p>
      <div className="cards">
      <Card title={"UI/UX Design"}/>
      <Card title={"Mobile App Dev"}/>
      <Card title={"Web App Dev"}/>
      <Card title={"Digital Marketing"}/>
      </div>
    </div>
  );
};

export default Services;
