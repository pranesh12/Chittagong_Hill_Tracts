import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Cards/Cards";

const Computer = () => {
  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;
  const computerData = fetchDAta?.filter((data) => data.type === "computer");
  return (
    <div>
      <h2 className="mt-3 mb-5">Computer Section</h2>
      <div className="row">
        <Cards filterData={computerData} />
      </div>
    </div>
  );
};

export default Computer;
