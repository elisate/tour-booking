import React from "react";


const Status_loged = () => {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let token = userData?.access_token;
  let Email = userData?.user.email;
  let Xloged = userData?.user.role;
  console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", Xloged);
  function Logout() {
    localStorage.removeItem("userData");
    window.location.href = "/";
  }
  if (Xloged == undefined) {
    return (
      <div className="BUTTOt">
      <a href="/loginbutton"  title="Reserve">
        <span>Login</span>
      </a></div>
    );
  } else {
    return (
      <div  className="BUTTOt" onClick={Logout}>
        <span >Logout</span>
      </div>
    );
  }
};
export default Status_loged;


