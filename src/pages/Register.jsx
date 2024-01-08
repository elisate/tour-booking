import "./Register.css";
import { useEffect, useState } from "react";
// import fectching from "../API/fetching";
import axios from "axios";
function Register() {
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullNames: "",
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
        "https://holidayplanner.onrender.com/auth/signup",
        formData
      );
      window.location.href = "/login_page";
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="my">
      <div className="content_register">
        <div class="container_register">
          <form onSubmit={handlesubmit}>
            <h3 className="reg">Registration Form</h3>

            <div class="form-group">
              <label for="email">Email:</label>

              <input
                type="email"
                id="email"
                name="email"
                className="R"
                onChange={handlechange}
              />
              <p className="login_notfy2">
                {errors.email && <span>{errors.email}</span>}
              </p>
            </div>

            <div class="form-group">
              <p>
                <label>fullName:</label>

                <input
                  type="text"
                  name="fullNames"
                  className="R"
                  onChange={handlechange}
                />
              </p>
              <p>
                <p className="login_notfy2">
                  {errors.fullNames && <span>{errors.fullNames}</span>}
                </p>
              </p>
            </div>

            {/* <div>
              <label for="phone">phone:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="R"
                required
          
                onChange={handlechange}
              />
            </div> */}

            {/* <div>
              <label for="location">location:</label>
              <input
                type="text"
                id="location"
                name="location"
                className="R"
                required
               
                onChange={handlechange}
              />
            </div> */}

            <div class="form-group">
              <p>
                <label for="password">Password:</label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="R"
                  onChange={handlechange}
                />
              </p>
              <p className="login_notfy2">
                {errors.password && <span>{errors.password}</span>}
              </p>
            </div>
            {/* <div class="form-group">
              <p>
                <label for="confirm_password">Confirm Password:</label>

                <input
                  type="password"
                  id="confirm_password"
                  name="confirmpassword"
                  className="R"
                  autoComplete="off"
                  onChange={handlechange}
                />
              </p>
              <p className="login_notfy2">
                {" "}
                {errors.confirmpassword && (
                  <span>{errors.confirmpassword}</span>
                )}
              </p>
            </div> */}
            <div className="we">
              <button type="submit" className="subr" onChange={handlechange}>
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div registerimage2>
          <img src="login-user.jpg" className="registerimage" />
        </div>
      </div>
    </div>
  );
}
export default Register;
