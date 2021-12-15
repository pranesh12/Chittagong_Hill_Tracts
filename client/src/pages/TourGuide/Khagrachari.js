import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";

const Khagrachari = () => {
  const location = useLocation();
  console.log(location.pathname.slice(1));
  const district = [
    { districtName: "khagrachari" },
    {
      placeNames: [
        { placeName: "alutila", id: 1 },
        { placeName: "debotapukur", id: 2 },
        { placeName: "hatimura", id: 3 },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <PlaceNames district={district} />
    </>
  );
};

export default Khagrachari;
