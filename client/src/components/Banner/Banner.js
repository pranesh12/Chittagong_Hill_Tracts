import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 banner_left">
            <div>
              <p className="banner_paragraph">
                Welcome to Chittagong hill tracts webstie
              </p>
            </div>
            <div>
              <h1 className="banner_heading">Chittagong hill tracts</h1>
            </div>
            <div>
              <p className="banner_paragraph">
                Chittagong hill tracts is a non-profit online archive and community.
                We are conserving and promoting cultures of world indigenous
                community. You can share and explore new ideas & thoughts
                representing diverse views of diverse people.
              </p>
            </div>
            <div>
              <Link className="discover" to="/articles">
                <h5>Discover Hill tracts</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
