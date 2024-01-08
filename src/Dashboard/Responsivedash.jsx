import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BsMessenger } from "react-icons/bs";


import "./Responsivedash.css";


function Responsivedash() {
  return (
    <div className="respo1">
      <div className="www">
        <ul>
          <li className="list_dash">
            <BiSolidDashboard />
            <a href="dashboard_page" >
              Dashboard
            </a>
          </li>
          <li>
            <ImUsers /> <a href="/dashboard/users">Users</a>
          </li>
          <li>
            <FaLocationDot /> <a href="placee">Place </a>
          </li>
          <li>
            <BiSolidPlaneAlt />
            <a href="/dashboard/tours">Tour</a>
          </li>
          <li>
            <BsMessenger />
            <a href="/dashboard/messa">
              Message
            </a>
          </li>

          <li className="list_dash">
            <MdExpandMore />
            <a href="/">
              Show More
            </a>
          </li>

          <li className="logout">
            <AiOutlineLogout /> <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Responsivedash;
