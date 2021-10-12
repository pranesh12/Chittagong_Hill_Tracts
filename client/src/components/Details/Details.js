import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getArticleData } from "../../Redux/actions/article";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchDataState = useSelector((state) => state.articleReducer.fetchDAta);
  const filterDetails = fetchDataState?.filter((data) => data._id === id);
  console.log(filterDetails);

  useEffect(() => {
    dispatch(getArticleData());
  }, [id, dispatch]);
  return (
    <div>
      <Navbar />
      {filterDetails?.map((filterData) => {
        return (
          <>
            <h1 className="text-center pt-2 pb-5">{filterData.data.header}</h1>
            <div className="d-flex justify-content-center mb-5">
              <iframe
                width="560"
                height="315"
                src={filterData.data.vedio}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p>{filterData.data.article}</p>
          </>
        );
      })}
    </div>
  );
};

export default Details;
