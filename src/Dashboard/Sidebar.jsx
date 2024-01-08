import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";

import { MdExpandMore } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import {ImUsers} from "react-icons/im";
import {BsMessenger} from "react-icons/bs"
import "./Sidebar.css";


function Sidebar() {
 
 
  return (
    <div className="dashhold">
      <div className="dushboard_header1">
        <div className="image_sidebar">
          <div className="image_sidebar">
            <img src="../elisa2.jpeg" className="photodash" />
          </div>
          <div className="nameelisa">
            <h4>{JSON.parse(localStorage.getItem("userData"))?.user.role} </h4>
            
          </div>
        </div>
        <div className="sidebar_subholder">
          <ul>
            <li className="list_dash">
              <BiSolidDashboard className="Do" />
              <a href="dashboard_page" className="list_dash">
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
              <BsMessenger />{" "}
              <a href="/dashboard/messa" className="list_dash">
                Message
              </a>
            </li>

            <li className="list_dash">
              <MdExpandMore />
              <a href="/" className="list_dash">
                Show More
              </a>
            </li>

            <li className="logout">
              <AiOutlineLogout /> <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
