import React, { useState } from "react";
import "./Tour.css";
import "./login_page.css";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";

import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const res = await axios.post(
        "https://holidayplanner.onrender.com/auth/login",
        formData
      );

      console.log(res.data);
      localStorage.setItem("userData", JSON.stringify(res.data));

      // JSON.parse(localStorage.getItem("userData"))?.user.fu

      if (res.data.user.role === "admin") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/homepage";
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <section className="login_section">
      <div className="login_manager">
        <form className="LOGINF" onSubmit={handlesubmit}>
          <div className="loggin">
            <div>
              <div className="fl">
                <div>
                  <b className="fl2">LOGIN FORM</b>
                </div>
                <div>
                  <p className="remove">
                    Does Not Have An Account Yet &nbsp;
                    <a href="Signup_page" className="alog">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
              <br></br>
              <div className="solve2">
                <p className="remove">
                  <b>Email Address</b>
                </p>
                <p>
                  <input
                    type="text"
                    name="email"
                    placeholder="you@example.com"
                    className="text_login"
                    onChange={handlechange}
                  />
                </p>
                <p className="login_notfy"></p>
              </div>
            </div>
            <div>
              <div className="password1">
                <div className="remove">
                  <b>Password</b>
                </div>
              </div>

              <div>
                <p>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter 6 characters or more"
                    className="login_butto0"
                    required
                    onChange={handlechange}
                  />
                </p>
                <p className="login_notfy"></p>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                value="Remember Me"
                name="Remember Me"
                className="contact_re"
              />
              Remember Me
            </div>

            <div className="login_butto1">
              <button type="submit" className="login_buttonn">
                LOGIN
              </button>
            </div>
            <div className="login_text">
              <div>
                <button id="google-login-button" className="login_butto2">
                  <FcGoogle />
                  Google
                </button>
              </div>

              <div>
                <button
                  id="facebook"
                  className="login_buttoa1"
                  onChange={handlechange}
                >
                  <LiaFacebookF />
                  facebook
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="loginimage">
          <img src="login-user.jpg" className="loginimage" />
        </div>
      </div>
    </section>
  );
}
export default Login;
