import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaceNames from "../../components/PlaceNames/PlaceNames";

const Rangamati = () => {
  const district = [
    { districtName: "rangamati" },
    {
      placeNames: [
        { placeName: "suvholong", id: 4 },
        { placeName: "rangamati sadar", id: 5 },
        { placeName: "sajek", id: 6 },
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

export default Rangamati;
