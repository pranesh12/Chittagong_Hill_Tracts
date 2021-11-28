import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import { getArticleData } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
import SubArticle from "../../components/SubArticle/SubArticle";

const Home = () => {
  const articleData = useSelector((state) => state.articleReducer.fetchDAta);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <About />
      <SubArticle data={articleData} />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
