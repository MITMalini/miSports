import React from "react";
import "../styles/dashboard-styles.css";
import SideNav from "../components/SideNav";

const Dashboard = (props) => {
  return (
    <div>
      <SideNav />
      <div className="containerDashboard1">
        <div className="containerDashboard2">
          <span className="text">
            <span>DASHBOARD</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
