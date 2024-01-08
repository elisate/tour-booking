import React, { useState } from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";

import { MdExpandMore } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";
import './Navtomenu.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
function Navtomenu({ handlemodal }) {
  return (
    <div className="n1">
      <div className="closeh">
        <AiOutlineCloseCircle className="noclose" onClick={handlemodal} />
        <div className="ni">
          <ul>
            <li className="n2">
              <BiSolidDashboard className="Do1" />
              <a href="dashboard_page" className="n2">
                Dashboard
              </a>
            </li>
            <li>
              <ImUsers className="Do1" /> <a href="/dashboard/users">Users</a>
            </li>
            <li>
              <FaLocationDot className="Do1" /> <a href="placee">Place </a>
            </li>
            <li>
              <BiSolidPlaneAlt className="Do1" />
              <a href="/dashboard/tours">Tour</a>
            </li>
            <li>
              <BsMessenger className="Do1" />{" "}
              <a href="/dashboard/messa" className="n2">
                Message
              </a>
            </li>

            <li className="n2">
              <MdExpandMore />
              <a href="/" className="n2">
                Show More
              </a>
            </li>

            <li className="logout">
              <AiOutlineLogout className="Do1" /> <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navtomenu