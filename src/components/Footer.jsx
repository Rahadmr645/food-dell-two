import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:'black',
        paddingTop:'10px'
      }}
      className="mt-4 ps-5 pe-5 footer"
    >
      <div className="left-footer d-flex flex-column gap-3" id="footer">
        <img style={{width:'200px'}} src={assets.logo} alt="" />
        <p style={{maxWidth:'400px'}}>This is Rahad Patwary you can do just need to focus this is the most great opportunity for you even you full life</p>
        <div  className="social-icon d-flex gap-2">
          <img style={{cursor:'pointer'}} src={assets.linkedin_icon} alt="" />
          <img style={{cursor:'pointer'}} src={assets.facebook_icon} alt="" />
          <img style={{cursor:'pointer'}} src={assets.twitter_icon} alt="" />
        </div>
      </div>
      <div  className="center-footer d-flex flex-column gap-2">
        <h1>COMPANY</h1>
        <p style={{cursor:'pointer'}} >Home</p>
        <p style={{cursor:'pointer'}} >menu</p>
        <p style={{cursor:'pointer'}} >mobile-app</p>
        <p style={{cursor:'pointer'}} ></p>
      </div>
      <div className=" right-footer">
        <h1>CONTACT-US</h1>
        <p>+8801648204828</p>
      </div>
    </div>
  );
};

export default Footer;
