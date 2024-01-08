import React from 'react'
import Dashboard_pages from './Dashboard_pages'
import "./Alldashboard.css";
import Card1dashb from './Card1dashb';
import Dashboard_pages2 from './Dashboard_pages2';

function Alldashboard() {
  return (
    <div className="alldashboard1">
      <div>
      
        <Card1dashb />
      </div>
      <div className="AllD1">
        <Dashboard_pages />
      </div>
      <div className="ALLL">
        <div className="hallD1">
          <div className="hallD">
            <p>Todays booking</p>
            <p>$20</p>
          </div>
          <div>
            <Dashboard_pages2 />
          </div>
        </div>
        <div className="hallD2">
          <div className="hallE">
            <p>Total booking</p>
            <p>$1000</p>
          </div>
          <div>
            <Dashboard_pages2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alldashboard