import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const TourguidePrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state.loginUserReducer.currentUser);
  console.log(state);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isGuide === true ? children : (window.location = "/auth")
      }
    />
  );
};

export default TourguidePrivateRoute;
