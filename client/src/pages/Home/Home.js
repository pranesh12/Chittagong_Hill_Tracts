import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import BestTeachers from "../../components/BestTeachers/BestTeachers";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import { getEducationalData, getTeachers } from "../../Redux/actions/education";

import ImportTantCourse from "../Courses/ImportTantCourse";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <ImportTantCourse />
      <BestTeachers />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
