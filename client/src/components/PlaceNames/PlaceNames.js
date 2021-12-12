import React from "react";
import { useDispatch } from "react-redux";
import { findTourguideByDistrictAndPlace } from "../../Redux/actions/Tourguide";

const PlaceNames = ({ district }) => {
  const [districtName, placeNames] = district;

  console.log(districtName, placeNames);

  const handlePlace = (e) => {
    const place = e.target.innerText;
    const district = districtName.districtName;
    dispatch(findTourguideByDistrictAndPlace(district, place));
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>{districtName.districtName}</h1>
        <ul className="list-group">
          {placeNames.placeNames.map((place) => {
            return (
              <li onClick={handlePlace} key={place.id} className="list-group-item">
                {place.placeName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PlaceNames;
