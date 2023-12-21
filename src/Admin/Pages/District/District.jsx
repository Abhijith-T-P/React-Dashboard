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
import "./District.css";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../config/Firebase";

const District = () => {
  const [district, setDistrict] = useState("");
  const [showdistrict, setShowDistrict] = useState([]);
  const dist = collection(db, "districts");

  const addDistrict = async () => {
    const docRef = await addDoc(collection(db, "districts"), {
      district,
    });
    fetchData();
    setDistrict("");
    console.log("Document written with ID: ", docRef.id);
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(dist, id));
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="District">
      <div className="wrapper">
        <Typography variant="h3" className="h1">
          District
        </Typography>
        <div className="form">
          <div className="formWrapper">
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Name of the district"
                value={district}
                required
                onChange={(event) => setDistrict(event.target.value)}
              />
            </div>
            <div className="btn">
              <Button
                variant="outlined"
                type="submit"
                className="btn"
                onClick={addDistrict}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper} sx={{ width: "600px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl .No</TableCell>
                <TableCell>District</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showdistrict.map((doc, key) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={key}
                >
                  <TableCell component="th" scope="row">
                    {doc.id}
                  </TableCell>
                  <TableCell>{doc.district}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={() => deleteData(doc.districtId)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default District;
