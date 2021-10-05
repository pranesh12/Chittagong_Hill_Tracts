import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 banner_left">
            <div>
              <p>Welcome to Chittagong hill tracts webstie</p>
            </div>
            <div>
              <h1>Chittagong hill tracts</h1>
            </div>
            <div>
              <p>
                Chittagong hill tracts is a non-profit online archive and community.
                We are conserving and promoting cultures of world indigenous
                community. You can share and explore new ideas & thoughts
                representing diverse views of diverse people.
              </p>
            </div>
            <div>
              <button className="banner_button btn">Discover Hill tracts</button>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
