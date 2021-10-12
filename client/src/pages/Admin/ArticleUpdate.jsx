import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { findDataByid, updateArticle } from "../../Redux/actions/article";

const ArticleUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const foundedData = useSelector(
    (state) => state.findArticleByIdReducer.foundCourse
  );

  const [articleData, setArticleData] = useState({
    category: "History",
    writer: "",
    header: "",
    article: "",
    img: "",
  });

  useEffect(() => {
    if (foundedData) {
      if (id === foundedData._id) {
        setArticleData({
          type: foundedData?.type,
          subType: foundedData?.subType,
          createdBy: foundedData?.createdBy,
          header: foundedData?.data.header,
          article: foundedData?.data.article,
          vedio: foundedData?.data.vedio,
          img: foundedData?.data.image,
        });
      } else {
        dispatch(findDataByid(id));
      }
    } else {
      dispatch(findDataByid(id));
    }
  }, [id, dispatch, foundedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateArticle(id, articleData));
  };
  const handleChange = (e) => {
    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>Update course course</h1>
          <h3>{id}</h3>

          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <select
                className="form-select"
                type="select"
                name="type"
                value={articleData.category}
                onChange={handleChange}
              >
                <option value="History">History</option>
                <option value="Art and Culture">Art and Culture</option>
                <option value="Education">Education</option>
                <option value="Potentiality in Cht">Potentiality in Cht</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="header"
                placeholder="Header"
                onChange={handleChange}
                value={articleData.header}
              />
            </div>
            <div class="mb-3">
              <FileBase64
                label="Image"
                fullWidth
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setArticleData({ ...articleData, img: base64 })
                }
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="createdBy"
                placeholder="Created By"
                value={articleData.createdBy}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="vedio"
                placeholder="Vedio"
                value={articleData.vedio}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <textarea
                style={{ height: "30vh" }}
                className="form-control"
                name="article"
                placeholder="Article"
                onChange={handleChange}
                value={articleData.article}
              />
            </div>
            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleUpdate;
