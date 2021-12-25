import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { dummyComment } from "../../data/commet";

console.log(dummyComment);

const ShowReview = () => {
  return (
    <>
      <div>
        {Array(3)
          .fill()
          .map((_) => {
            return (
              <FaStar
                size={24}
                color={colors.orange}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
      </div>

      {dummyComment.map((review) => {
        return (
          <>
            <div>
              <h1>{review.name}</h1>
              <h2>{review.comment}</h2>
              <p>{review.star}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default ShowReview;
