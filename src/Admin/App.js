import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import District from "./Pages/District/District";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="Routes" style={{padding:'30px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/District" element={<District />} />
            <Route path="/Category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
