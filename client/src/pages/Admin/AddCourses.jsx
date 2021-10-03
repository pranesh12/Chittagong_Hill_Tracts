import React, { useState } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { addEducationData } from "../../Redux/actions/education";

const AddCourses = () => {
  const dispatch = useDispatch();
  const [educationData, setEducationData] = useState({
    type: "programming",
    subType: "",
    createdBy: "",
    header: "",
    article: "",
    vedio: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducationData(educationData));
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
          <h2 className="mb-4 text-center">Add Courses</h2>

          {/* Adding form */}
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

export default AddCourses;
