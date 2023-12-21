import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Jurisdiction.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase";
const Jurisdiction = () => {
  const jur = collection(db, "Jurisdiction");
  const [jurisdictionValue, setJurisdictionValue] = useState("");
  const [dispalayData, setDispayData] = useState([]);

  useEffect(() => {
    showJurisdiction();
  }, []);

  const submitJurisdiction = async () => {
    try {
      await addDoc(jur, {
        Jurisdiction: jurisdictionValue,
      });
      alert(`${jurisdictionValue} Inserted succesfulley `);
      setJurisdictionValue("");
    } catch (error) {
      console.error(error);
    }
  };

  const showJurisdiction = async () => {
    try {
      const data = await getDocs(jur);
      const filteredData = data.docs.map((doc, key) => ({
        ...doc.data(),
        ID: doc.id,
      }));
      setDispayData(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Jurisdiction">
      <div className="wrapper">
        <div className="h1">
          <Typography variant="h3">Jurisdiction</Typography>
        </div>

        <div className="form">
          <div className="formWrapper">
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Name of the Jurisdiction"
                value={jurisdictionValue}
                onChange={(e) => setJurisdictionValue(e.target.value)}
                required
              />
              <div className="btn">
                <Button
                  variant="outlined"
                  type="submit"
                  className="btn"
                  onClick={submitJurisdiction}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="tableCategory">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell align="right">Jurisdiction</TableCell>
                    <TableCell align="right">Action</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispalayData.map((row, index) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right"> {row.Jurisdiction} </TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right">2</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
