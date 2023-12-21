import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./Jurisdiction.css";
const Jurisdiction = () => {
  return (
    <div className="Jurisdiction">
      <div className="wrapper">
        <div className="h1">
          <Typography variant="h3">Jurisdiction</Typography>
        </div>
      </div>
      <div className="form">
        <div className="formWrapper">
          <div className="input">
            <TextField
              id="outlined-basic"
              label="Name of the Jurisdiction"
              value={""}
              required
            />
            <div className="btn">
              <Button variant="outlined" type="submit" className="btn">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
