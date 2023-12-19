import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './District.css';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../../config/Firebase'

const District = () => {

  const [district, setDistrict] = useState('')

  const addDistrict = async () => {
    
    const docRef = await addDoc(collection(db, 'districts'), {
      district 
    });
    console.log("Document written with ID: ", docRef.id);


  }
  return (
    <div className="District">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          District
        </Typography>
        <div className="form">
            <div className="formWrapper">
            <div className="input">
                <TextField id="outlined-basic" label="Name of the district" required  onChange={(event) => setDistrict(event.target.value)}/>
            </div>
            <div className="btn">

          <Button variant="outlined"type="submit" className="btn" onClick={addDistrict}>Submit</Button>
            </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default District;
