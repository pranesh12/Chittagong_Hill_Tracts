import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ filterData }) => {
  return (
    <>
      {filterData?.map((data) => {
        return (
          <div className="col-md-3">
            <div className="card">
              {
                <img
                  src={data.data.image}
                  className="card-img-top"
                  alt={data.subType}
                />
              }
              <div className="card-body">
                <Link className="card-title" to={`/${data.subType}/${data._id}`}>
                  <h5>{data.subType}</h5>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
