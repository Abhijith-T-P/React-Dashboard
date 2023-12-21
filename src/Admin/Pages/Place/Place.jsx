import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../District/District.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";

const Place = () => {
  const [showdistrict, setShowDistrict] = useState([]);
  const [district,setDistrict]=useState("");

  useEffect (() => {
    fetchData();
  },[])
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "districts"));
    const data = querySnapshot.docs.map((doc, key) => ({
      id: key + 1,
      districtId: doc.id,
      ...doc.data(),
    }));
    setShowDistrict(data);
    console.log(data);
  };
  return (
    <div className="Place">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          Place
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input"></div>
            <div className="input">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">District  </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={district}
                  label="District"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                    {showdistrict.map((doc,key)=>(

                  <MenuItem value={doc.id}>{doc.district}</MenuItem>
                    ))}
                 
                </Select>
              </FormControl>
            </div>
            <div className="input">
              <TextField id="outlined-basic" label="Place name" required />
            </div>

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

export default Place;
