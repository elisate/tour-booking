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
              <AiOutlineCloseCircle className="close_icon" onClick={open} />
            </div>

            <div className="allpages">
              <div className="all">
                <ul>
                  <li className="ul">
                    <Link to="/homepage" onClick={open}>
                      Home
                    </Link>
                  </li>
                  <li className="li2">
                    <Link to="/Tour_page" onClick={open}>
                      Tours
                    </Link>
                  </li>
                  <li className="li3">
                    <Link to="/contact_page" onClick={open}>
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="/login_page" className="l4">
                      Login
                    </Link>
                  </li>

                  <li className="li3">
                    <Link to="/Register_page">Register</Link>
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
