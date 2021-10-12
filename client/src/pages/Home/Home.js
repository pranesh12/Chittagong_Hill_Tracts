import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import { getArticleData, getTeachers } from "../../Redux/actions/article";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleData());
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
