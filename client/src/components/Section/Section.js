import React from "react";
import "./section.css";
import othersvg from "../../images/svg/other.svg";
import promotionsvg from "../../images/svg/promotion.svg";
import reasearchsvg from "../../images/svg/research.svg";

const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row gx-3 gy-5">
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={promotionsvg}
                  alt="promotionsvg"
                />
                <h2 className="card-title section_header">Promoting cultures</h2>
                <p className="card-text section_text">
                  Promoting diverse cultures of world indigenous communities and
                  uphold the spirit of diversity is our primary objective.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={othersvg}
                  alt="othersvg"
                />
                <h2 className="card-title section_header">Bridging the gap</h2>
                <p className="card-text section_text">
                  At Chittgong hill tracts we believe all indigenous cultures can
                  co-exist better. Together we can achieve more. Let's replace 'I'
                  with 'We'.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card about_card" style={{ width: "20rem" }}>
              <div className="card-body">
                <img
                  className="img-fluid section_img"
                  src={reasearchsvg}
                  alt="reasearchsvg"
                />
                <h2 className="card-title section_header">Helpful for Research</h2>
                <p className="card-text section_text">
                  Chittagong hill tracts aims at providing helpful resources for the
                  researcher regarding indigenous community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
