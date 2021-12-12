import React from "react";
import { useDispatch } from "react-redux";
import { findTourguideByDistrictAndPlace } from "../../Redux/actions/Tourguide";
import { Link } from "react-router-dom";

const PlaceNames = ({ district }) => {
  const [districtName, placeNames] = district;
  const dispatch = useDispatch();
  const handlePlace = (e) => {
    const place = e.target.innerText;
    const district = districtName.districtName;

    dispatch(findTourguideByDistrictAndPlace(district, place));
  };

  return (
    <>
      <div className="container">
        <h1>{districtName.districtName}</h1>
        <ul className="list-group">
          {placeNames.placeNames.map((place) => {
            return (
              <Link to="/filterTourguidesList">
                <li onClick={handlePlace} key={place.id} className="list-group-item">
                  {place.placeName}
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
