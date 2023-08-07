import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      
  
    <div className="aboutUs">
      <div className="content">
        <div className="heading">
        <h1>
          About <span>Us</span>
        </h1>
        <img   src={require('../assets/images/mark.png')}/>
        </div>
        <p>
          Our designs bring your imagination to life, effortlessly and joyfully
          realizing your greatest ambitions. Leading digital agency with solid
          design and development expertise. we build readymade websites, mobile
          applications and elaborate online business services.
        </p>
      </div>

      <div className="aboutImage">
          <img   src={require('../assets/images/aboutimage.png')}/>
      </div>
    </div>

    </div>
  );
};

export default AboutUs;
