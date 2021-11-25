import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticleData } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
const Atricles = () => {
  const courseState = useSelector((state) => state.articleReducer.fetchDAta);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container  text-center">
        <h1 className="article_heading mb-5 mt-5"> Articles</h1>
        <div className="row gx-3 gy-5">
          <Cards filterData={courseState} />
        </div>
      </div>
    </>
  );
};

export default Atricles;
