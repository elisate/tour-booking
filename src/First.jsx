import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Navtopages from "./pages/Navtopages";
import { HiMenuAlt3 } from "react-icons/hi";
import Status_loged from "../Status_loged";

function First() {
  const [modal, setModal] = useState(false);
  const open=()=>{
    setModal(!modal);

  }

  return (
    <div>
      {modal && <Navtopages open={open} />}
      <div className="first">
        <div className="section2">
          <div className="container">
            <div className="contacts">
              <div className="gip">
                <div className="icon2_t">
                  <div>
                    <MdOutlineEmail className="icon2" />
                  </div>
                  <div className="word">
                    <h5>HolydayPlanners@gmial.com</h5>
                  </div>
                </div>
                <div className="icon3_t">
                  <div>
                    <IoCallOutline className="icon3" />
                  </div>
                  <div className="word2">+123 456 7890</div>
                </div>
              </div>
            </div>

            <div className="icon4_t">
              <div className="d1">
                <FaFacebookF className="icon4" />
              </div>
              <div className="d2">
                <BsInstagram className="icon4" />
              </div>
              <div className="d3">
                <AiOutlineTwitter className="icon4" />
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="logo">
            <img src="logo.png" className="logoo" />
          </div>
          <div className="subsection">
            <div className="but">
              <div>
                <Status_loged />
              </div>
              <div className="icon1">
                <HiOutlineSearchCircle className="icon1" />
              </div>
            </div>
            <div className="h" onClick={open}>
              {/* onClick=
              {() => {
                setModal(!modal);
              }} */}
              <h1>
                <HiMenuAlt3 className="hic" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default First;
