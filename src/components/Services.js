import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="serviceContainer">

      <div className="services">

      <div className="heading">
      <h1>
        What We're <span>Good At</span>

      </h1>

      <img   src={require('../assets/images/servicesmark.png')}/>
      </div>

      <div className="servicelist">
        <div className="service">
          <div className="content">
          <h5>01</h5>
          <div>
            <h2>Web Development</h2>
            <p>
              User-Centric Approach We belive That Design Should Revolve around
              the needs and desires of your users.
            </p>
          </div>

          </div>

          <div className="image"><img   src={require('../assets/images/p1.png')}/></div>
        </div>
        <div className="service">
        <div className="content">
          <h5>02</h5>
          
          <div>
          <h2>Graphic Designing</h2>
          <p>
            User-Centric Approach We belive That Design Should Revolve around
            the needs and desires of your users.
          </p>
          </div>
          </div>
          <div className="image"><img   src={require('../assets/images/p1.png')}/></div>
        </div>
        <div className="service">
        <div className="content">
          <h5>03</h5>
          <div>
          <h2>UI/UX Designing</h2>
          <p>
            User-Centric Approach We belive That Design Should Revolve around
            the needs and desires of your users.
          </p>
          </div>
          </div>
          <div className="image"><img   src={require('../assets/images/p1.png')}/></div>
        </div>
        <div className="service">
          <div className="content">
          <h5>04</h5>
          <div>
          <h2>Digital Marketing</h2>
          <p>
            User-Centric Approach We belive That Design Should Revolve around
            the needs and desires of your users.
          </p>
          </div>
          </div>
          <div className="image"><img   src={require('../assets/images/p1.png')}/></div>
        </div>


      </div>
      </div>
    
    </div>
  );
};

export default Services;
