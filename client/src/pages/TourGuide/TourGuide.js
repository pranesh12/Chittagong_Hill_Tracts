import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./TourGuide.css";
const TourGuide = () => {
  return (
    <>
      <Navbar />
      <h1>Tour guide</h1>
      <button className="btn btn-primary">Khagrachari</button>
      <button className="btn btn-primary">Rangamati</button>
      <button className="btn btn-primary">Bandarban</button>
    </>
  );
};

export default TourGuide;
