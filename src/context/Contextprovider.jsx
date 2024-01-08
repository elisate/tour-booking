import { createContext, useContext, useEffect, useState } from "react";
import fectching from "../API/fetching";
import { data } from "jquery";
// import { Axios } from "axios";
const statement = createContext();

export const Appcontext = ({ children }) => {
  const [listcard, setListcard] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await fectching.get(
          "https://holiday-planner-4lnj.onrender.com/api/v1/tour"
        );
        console.log(response.data);
        setListcard(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(listcard);
          console.log("errorr");
        }
      }
    };
    fetchapi();
  }, []);

  const [siteuser, SetSiteuser] = useState([]);
  const FecthData = async () => {
    try {
      const result = await fectching.get(
        `https://holidayplanner.onrender.com/auth`
      );
      

      if (data) {
        console.log("=============================",result.data.data);
        localStorage.setItem("users", JSON.stringify(result.data));
        SetSiteuser(result.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    FecthData();
  }, []);
  
  let userData = JSON.parse(localStorage.getItem("userData"));
  let token = userData?.access_token;
  let email = userData?.user.email;

  return (
    <statement.Provider
      value={{ listcard, setListcard, siteuser, SetSiteuser }}
    >
      {children}
    </statement.Provider>
  );
};
export const mycontext = () => useContext(statement);
