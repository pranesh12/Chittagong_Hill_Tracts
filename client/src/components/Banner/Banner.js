import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 banner_left">
            <div>
              <p>Welcome to chittagong hill tracts website</p>
            </div>
            <div>
              <h1>Chittagong hill tracts</h1>
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
