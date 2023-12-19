import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { db } from "../../../config/Firebase";
import { addDoc, collection } from "firebase/firestore";

const Category = () => {
  const [category, setCategory] = useState('')
  const addCategory = async () => {
    const catId = await addDoc(collection(db,"lawyer_category"),{
        category
    });
    alert(catId.category," inserted succesfulley")
    console.log("id : " ,catId.id)
  }

  return (
    <div className="Category">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          Category
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input">
              <TextField
                id="outlined-basic"
                label=" Category name"
                required
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
            <div className="btn">
              <Button variant="outlined" type="submit" className="btn" onClick={addCategory}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
