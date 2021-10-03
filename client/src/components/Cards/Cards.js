import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ filterData }) => {
  return (
    <>
      {filterData?.map((data) => {
        return (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              {<img src={data.data.image} className="card-img-top" alt="..." />}
              <div className="card-body">
                <h5 className="card-title">{data.subType}</h5>
                <Link
                  to={`/${data.subType}/${data._id}`}
                  className="btn btn-primary"
                >
                  Details
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
