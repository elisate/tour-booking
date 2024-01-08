import React from "react";
import "./nav.css";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTwitterCircle } from "react-icons/ai";
import {AiOutlineCloseCircle}  from 'react-icons/ai'
import { Link } from "react-router-dom";
function Navtopages({open}) {
  return (
    <>
      <section className="holder">
        <div className="navpost">
          <div className="nav1">
            <div className="pad">
              <img src="white-logo.png" alt="log" />
            </div>
            <div>
              <AiOutlineCloseCircle className="close_icon" onClick={open}/>
            </div>

            <div className="allpages">
              <div className="all">
                <ul>
                  <li className="ul">
                    <a href="homepage">Home</a>
                  </li>
                  <li className="li2">
                    <a href="Tour_page">Tours</a>
                  </li>
                  <li className="li3">
                    <a href="contact_page">Contact us</a>
                  </li>
                  <li>
                    <a href="login_page" className="l4">
                      Login
                    </a>
                  </li>

                  <li className="li3">
                    <a href="Register_page">Register</a>
                  </li>
                 
                </ul>
              </div>
              <div className="so">
                <div className="social">
                  <BsFacebook className="so3" />
                  <PiInstagramLogoFill className="so3" />
                  <AiFillTwitterCircle className="so1" />
                </div>

                <img src="logo-icon-white.svg" className="whites" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navtopages;
