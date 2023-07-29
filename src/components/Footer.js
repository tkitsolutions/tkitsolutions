import React from "react";
import{FaFacebookF} from 'react-icons/fa'
import{AiOutlineTwitter} from 'react-icons/ai'
import{AiFillInstagram} from 'react-icons/ai'
import{BsYoutube} from 'react-icons/bs'
import{HiMail} from 'react-icons/hi'
import{MdLocationOn} from 'react-icons/md'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="about">
          <img src={require("../assets/images/logo.png")} />
          <p>
            Our car rental business offers a convenient and reliable way to get
            behind the wheel of a vehicle. Whether you're looking for a car for
            a family vacation.
          </p>
          <div className="icons">
            <div><FaFacebookF/></div>
            <div><AiOutlineTwitter/></div>
            <div><AiFillInstagram/></div>
            <div><BsYoutube/></div>
          </div>
        </div>
        <div className="quickmenu">
            <h1>Quick Links</h1>
            <div>Home</div>
            <div>About Us</div>
            <div>Services</div>
            <div>Products</div>
        </div>
        <div className="contact">
            <div>
             <HiMail/>   
             <p>mail.tkitsolutions@gmail.com</p>   
            </div>
            <div>
             <MdLocationOn/>   
             <p>Islamabad, Pakistan</p>   
            </div>
        </div>
      </div>
      <div className="footerbar">
        &#169; 2023 - TKIT SOL | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
