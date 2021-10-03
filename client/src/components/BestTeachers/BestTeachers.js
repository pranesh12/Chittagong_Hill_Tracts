import React from "react";
import { useSelector } from "react-redux";
import BesTeacherCard from "./BesTeacherCard";
import "./BestTeaches.css";
const BestTeachers = () => {
  const teacherState = useSelector((state) => state.teachersReducer.teachers);
  return (
    <div className="bestTeachers">
      <div className="container ">
        <h1 className="text-center pt-5">Meet Our popular Teachers</h1>
        <div className="row">
          <BesTeacherCard teacherData={teacherState} />
        </div>
      </div>
    </div>
  );
};

export default BestTeachers;
