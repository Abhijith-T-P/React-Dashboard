import React from "react";
import "./Widget.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';

function Widget() {
  return (
    <div className="Widget">
      <div className="widgetRight">
        <Typography variant="h6" className="User">
          User
        </Typography>
        <Typography variant="subtitle1" className="id">
          ID :
        </Typography>
        <Link href="" className="link">
          View More
        </Link>{" "}
      </div>
      <div className="widgetLeft">
        <div className="percentage">
            <KeyboardArrowUpIcon/>
            50%</div>
            <div className="containerIcon">
      <PersonIcon className="icon"/>

            </div>
      </div>
    </div>
  );
}

export default Widget;
