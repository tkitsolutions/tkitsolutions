import React from "react";
import Logo1 from "../assets/images/tkitlogo.svg";
import Logo2 from "../assets/images/logo2.svg";
import menuicon from "../assets/images/menu.svg";
import {RxHamburgerMenu} from 'react-icons/rx';
const Navbar = ({homeRef,aboutRef,productsRef,servicesRef}) => {

  const handleClick=()=>{
    const x=document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }
  return (
    <div className="navbar">
        <img src={Logo1} alt=""  className='logo1' />
        <img src={Logo2} alt=""   className='logo2' />
       <ul id="menu">
        <li><a onClick={()=>homeRef.scrollIntoView({behaviour:"smooth"})}>Home</a></li>
        <li><a onClick={()=>aboutRef.scrollIntoView({behaviour:"smooth"})}>About Us</a></li>
        <li><a onClick={()=>servicesRef.scrollIntoView({behaviour:"smooth"})}>Services</a></li>
        <li><a onClick={()=>productsRef.scrollIntoView({behaviour:"smooth"})}>Products</a></li>
      </ul>

      <div className="rightSide">

      <img src={menuicon} className="menuicon" onClick={handleClick}/>
      <button>Get a Quote</button>

      </div>
    </div>
  );
};

export default Navbar;
