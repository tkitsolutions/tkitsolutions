import React from "react";
import Logo from "../assets/images/tkitlogo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={Logo} alt="" />
       <ul>
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Services</a></li>
        <li><a>Products</a></li>
      </ul>
  
      <button>Get a Quote</button>

    </div>
  );
};

export default Navbar;
