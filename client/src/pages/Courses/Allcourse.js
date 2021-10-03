import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Computer from "../../components/CoursesSection/Computer/Computer";
import Language from "../../components/CoursesSection/Language/Language";
import Praogramming from "../../components/CoursesSection/Programming/Praogramming";
import Navbar from "../../components/Navbar/Navbar";
import { getEducationalData } from "../../Redux/actions/education";

const Allcourse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <Computer />
        <Language />
        <Praogramming />
      </div>
    </>
  );
};

export default Allcourse;
