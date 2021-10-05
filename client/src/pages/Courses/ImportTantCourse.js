import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import "./importTCourse.css";

const ImportTantCourse = () => {
  const courseState = useSelector((state) => state.eudcationReducer.fetchDAta);
  const threeCourse = courseState?.slice(0, 3);
  return (
    <div>
      <div className=" importantCourse container">
        <h1 className="text-center">Our Popular Airticles</h1>
        <div className="row ">
          <Cards filterData={threeCourse} />
        </div>
        <div className="mt-5  importantCourse_btn">
          <Link to="/courses">
            <button className="btn btn-primary ">Find More Articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImportTantCourse;
