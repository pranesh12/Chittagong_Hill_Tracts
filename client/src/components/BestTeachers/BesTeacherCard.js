import React from "react";

const BesTeacherCard = ({ teacherData }) => {
  return (
    <div className="row gy-4  mb-5 pb-5">
      {teacherData?.map((data) => {
        return (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={data.profilePic}
                className="img-fluid card-img-top"
                alt={data.name}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p>Subject : {data.subject}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BesTeacherCard;
