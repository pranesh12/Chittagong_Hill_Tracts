import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";

const Khagrachari = () => {
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
