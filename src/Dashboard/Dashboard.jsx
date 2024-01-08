import React, { Children } from "react";
import "./Sidebar.css";

import Sidebar from "./Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let token = userData?.access_token;
  let Email = userData?.user.email;
  let Xloged = userData?.user.role;
  if (token !== undefined && Xloged == "admin") {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="custom-background-color">
          <Outlet />
        </div>
      </div>
    );
  }

  return <Navigate to="/login_page" />;
}
