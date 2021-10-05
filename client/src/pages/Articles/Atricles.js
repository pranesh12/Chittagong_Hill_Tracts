import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEducationalData } from "../../Redux/actions/education";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/Navbar/Navbar";
const Atricles = () => {
  const courseState = useSelector((state) => state.eudcationReducer.fetchDAta);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container  text-center">
        <h1 className="article_heading">All Articles</h1>
        <div className="row gx-3 gy-5">
          <Cards filterData={courseState} />
        </div>
      </div>
    </>
  );
};

export default Atricles;