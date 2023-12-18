import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Widget from "../../Components/Widget/Widget";

function Home() {
  return (
    <div className="Home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="Widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Home;
