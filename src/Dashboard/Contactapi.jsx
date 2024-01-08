import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './contactapi.css';
import ReactPaginate from 'react-paginate';



function Contactapi() {
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

const [pagenumber, setPagenumber] = useState(0);
const siteuserPerPage = 3;
const pagesVisited = pagenumber * siteuserPerPage;
const diplaycontact=SiteUser?.slice(pagesVisited,pagesVisited+siteuserPerPage)
const change=({selected})=>{
  setPagenumber(selected);
}




  return (
    <div className="contactapi1">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th> Email</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diplaycontact?.map((item) => (
            <tr>
              <td></td>
              <td>{item.userEmail}</td>
              <td>{item.message}</td>
              <td>{item.reply}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
      pageCount={Math.ceil(SiteUser?.length/siteuserPerPage)}
        previousLabel={"Previos"}
        nextLabel={"Next"}
        
        onPageChange={change}
        containerClassName={"paginationbuttons"}
        previousLinkClassName={"previosbuttons"}
        nextLinkClassName={"nextbuttons"}
        disabledClassName={"paginationdisabled"}
        activeClassName={"paginationactive"}
      ></ReactPaginate>
    </div>
  );
}

export default Contactapi