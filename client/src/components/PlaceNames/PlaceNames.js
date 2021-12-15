import React from "react";
import { useDispatch } from "react-redux";
import { findTourguideByDistrictAndPlace } from "../../Redux/actions/Tourguide";
import { Link } from "react-router-dom";

const PlaceNames = ({ district }) => {
  const districtName = district?.[0].district;
  const dispatch = useDispatch();

  const handlePlace = (e) => {
    const place = e.target.innerText;
    dispatch(findTourguideByDistrictAndPlace(districtName, place));
  };

  return (
    <>
      <div className="container">
        <h1>{districtName}</h1>
        <ul className="list-group">
          {district?.map((place) => {
            return (
              <Link to="/filterTourguidesList">
                <li onClick={handlePlace} key={place.id} className="list-group-item">
                  {place.place}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PlaceNames;
