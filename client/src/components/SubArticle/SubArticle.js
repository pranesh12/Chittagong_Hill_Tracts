import React from "react";
import SubArticleCard from "./SubArticleCard";
const SubArticle = ({ data }) => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mt-5 mb-5"> Articles</h1>
      <div className="row gx-3 gy-5">
        <SubArticleCard filterData={data} />
      </div>
    </div>
  );
};

export default SubArticle;
