import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { findDataByid, updateCourse } from "../../Redux/actions/education";

const UpdateCourse = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const foundedData = useSelector(
    (state) => state.findcourseByIdReducer.foundCourse
  );

  const [educationData, setEducationData] = useState({
    type: "programming",
    subType: "",
    createdBy: "",
    header: "",
    article: "",
    vedio: "",
    img: "",
  });

  useEffect(() => {
    if (foundedData) {
      if (id === foundedData._id) {
        setEducationData({
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
    dispatch(updateCourse(id, educationData));
  };
  const handleChange = (e) => {
    setEducationData({
      ...educationData,
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
                value={educationData.type}
                onChange={handleChange}
              >
                <option value="programming">Programming</option>
                <option value="language">Language</option>
                <option value="computer">Computer</option>
              </select>
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="subType"
                placeholder="Sub-Type"
                value={educationData.subType}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <FileBase64
                label="Image"
                fullWidth
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setEducationData({ ...educationData, img: base64 })
                }
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="createdBy"
                placeholder="Created By"
                value={educationData.createdBy}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="header"
                placeholder="Header"
                onChange={handleChange}
                value={educationData.header}
              />
            </div>

            <div class="mb-3">
              <input
                className="form-control"
                type="text"
                name="vedio"
                placeholder="Vedio"
                value={educationData.vedio}
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
                value={educationData.article}
              />
            </div>
            <button className="btn submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
