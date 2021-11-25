import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logoutUser } from "../../Redux/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUserState = useSelector((state) => state.userReducer.currentUser);
  const { name } = currentUserState;

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Chittagong Hill Tracts
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Possiblities of CHT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Education/61853147b55f903ed872b2e7">
                  Chakma Alphabet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Education/61855355035620151820ac13">
                  Banglali To Chakma Translation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Artilces
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                {name ? (
                  <Link className="nav-link">{name}</Link>
                ) : (
                  <Link className="nav-link" to="/auth">
                    Login/registration
                  </Link>
                )}
              </li>
              <li onClick={() => dispatch(logoutUser())} className="nav-item">
                <Link className="nav-link">logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
