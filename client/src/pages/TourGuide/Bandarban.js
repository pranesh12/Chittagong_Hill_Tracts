import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";

const Bandarban = () => {
  const district = [
    { districtName: "bandarban" },
    {
      placeNames: [
        { placeName: "nilgiri", id: 7 },
        { placeName: "nilachol", id: 9 },
        { placeName: "bandarban sadar", id: 20 },
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

export default Bandarban;
