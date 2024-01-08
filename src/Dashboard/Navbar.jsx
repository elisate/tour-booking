import React from "react";
 import  {LuSettings} from 'react-icons/lu';
 import {BsSun} from 'react-icons/bs';
import { MdOutlineDarkMode } from "react-icons/md";
import'./Navbar.css';
import {BiMessageRoundedDots} from "react-icons/bi";
import {IoMdNotificationsOutline} from "react-icons/io";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {FaSearch} from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navtomenu from "./Navtomenu";

function Navbar() {
  const [SiteUser, SetSiteUser] = useState([]);
  const FecthData = async () => {
    try {
      const { data } = await axios.get(
        `https://holidayplanner.onrender.com/contact/`
      );

      if (data) {
        console.log(data.data);
        SetSiteUser(data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    FecthData();
  }, []);

   const [modal,setModal] =useState(false);
   const handlemodal=()=>{
    setModal(!modal);
   }
  
  
  return (
    <>
      {modal && <Navtomenu handlemodal={handlemodal}/>}
      <div className="holder_nav_dash">
        <div className="end_navbar_top1">
          <div className="yane">
            <div>
              <HiOutlineMenuAlt3 className="menu" onClick={handlemodal} />
            </div>
            <div>
              <BiMessageRoundedDots className="notmessage" />
              <p className="lm">{SiteUser.length}</p>
            </div>
            <div>
              <IoMdNotificationsOutline className="notmessage2" />
            </div>
          </div>
          <p>
            <input type="text" placeholder="search" className="search" />
            <FaSearch className="fasearch" />
          </p>

          <div>
            <LuSettings className="setting" />
          </div>
        </div>
        <div className="end_navbar_top">
          <div>
            <BsSun className="sun" />
          </div>
          <div>Darkmode</div>
          <div>
            <MdOutlineDarkMode className="moon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
