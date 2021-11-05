import React from "react";
import "./About.css";
import person from "../../images/person.png";
import one from "../../images/one.jpg";
const About = () => {
  return (
    <>
      <div className=" container about">
        <div className="row">
          <div className="col-md-6">
            <div className="about_header">
              <h1>Want to Know more</h1>
            </div>
            <div className="about_content">
              <p>
                Chittagong hill tracts is a non-profit online archive and community.
                We are conserving and promoting cultures of world indigenous
                community. You can share and explore new ideas & thoughts
                representing diverse views of diverse people.zs
              </p>
            </div>
            <div className="about_iconlist">
              <div>
                <i class="far fa-lightbulb"> </i>
                <span className="m-3">Discover hill tracts</span>
              </div>
              <div>
                <i class="fas fa-language"></i>
                <span className="m-3">Learn tribe languages</span>
              </div>
              <div>
                <i class="fas fa-drafting-compass"></i>
                <span className="m-3">Explore posiblities</span>
              </div>
              <div>
                <i class="fab fa-wpexplorer"></i>
                <span className="m-3">Explore Something Exciting</span>
              </div>
            </div>
            <div>
              <button className="btn about_button"> Contact us</button>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={person} alt="person" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
