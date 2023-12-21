import {
    Button,
    
    FormControl,
    
    InputLabel,
    
    MenuItem,
    
    Select,
    
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import "../District/District.css";
  import {
    
  } from "firebase/firestore";
  import { db } from "../../../config/Firebase";
  
  const Subcategory = () => {
    
  const [category,setCategory] = useState("");    
    return (
      <div className="Subcategory">
        <div className="wrapper">
          <Typography variant="h3" className="h1">
            Subcategory
          </Typography>
          <div className="form">
            <div className="formWrapper">
              <div className="input">
                <TextField
                  id="outlined-basic"
                  label="Subcategory name"
                                    required
                />
              </div>
              <div className="input">
              <FormControl fullWidth>

              <InputLabel  id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
value={category}
    label="Category"
    
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  </FormControl>
              </div>
              <div className="btn">
                <Button
                  variant="outlined"
                  type="submit"
                  className="btn"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
  };
  
  export default Subcategory;
  