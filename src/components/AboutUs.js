import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1>
        About <span>Us</span>
      </h1>
      <div className="aboutUsContent">
        <div className="workAnimation">
          <div>Understand</div>
          <div>Plan</div>
          <div>Development</div>
          <div>Design</div>
        </div>
        <div className="description">
          <h1>World Class Trending Platform</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy
          </p>

          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
