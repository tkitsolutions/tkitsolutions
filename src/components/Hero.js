import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HeroImg from "../assets/images/heroImg.svg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1>
          A Digital Agency Transforming Your <span>Dreams</span> Into{" "}
          <span>Reality</span>
        </h1>
        <p>
          We transform abstract ideas and visions into tangible and functional
          digital products
        </p>
        <div className="heroButtons">
          <button className="primary">Contact Us</button>
          <button className="secondary">Products</button>
        </div>
      </div>
      <div className="heroImg">
        <img src={HeroImg}/>
      </div>
    </div>
  );
};

export default Hero;
