import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">지역선택</span>
      </div>
     
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>

          <li>
            <ListOutlinedIcon className="icon" />
            <span>Services</span>
          </li>
          <p className="title">Notification</p>

          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>notification</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorMode"></div>
        <div className="colorMode"></div>
      </div>
    </div>
  );
}

export default Sidebar;
