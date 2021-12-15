import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Places = () => {
  const location = useLocation();
  const district = location.pathname.slice(1);
  const districtState = useSelector(
    (state) => state.state.getPlaceReducer.fetchDAta
  );
  console.log(districtState);
  return (
    <div>
      <h1>Places</h1>
    </div>
  );
};

export default Places;
