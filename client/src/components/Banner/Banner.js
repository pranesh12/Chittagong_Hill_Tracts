import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 banner_left">
            <div>
              <p>Popular online Courses</p>
            </div>
            <div>
              <h1>The new way to learn properly with us</h1>
            </div>
            <div>
              <button className="banner_button btn">Get Started</button>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
