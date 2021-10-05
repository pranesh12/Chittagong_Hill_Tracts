import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/actions/userAction";
import "./DashBoard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <nav className="sidebar">
      <div className="custom_menu">
        <button type="button" className="btn btn_collapse ">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <h2>Project Name</h2>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <NavLink to="/admin">
            <span className="fa fa-home mr-2"></span> Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/userlist">
            <span className="fa fa-user mr-3"></span> User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addcourse">
            <i class="far fa-plus-square"></i> Add Article
          </NavLink>
        </li>
        <li onClick={() => dispatch(logoutUser())}>
          <NavLink to="#">
            <i class="fas fa-sign-out-alt"></i> Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
