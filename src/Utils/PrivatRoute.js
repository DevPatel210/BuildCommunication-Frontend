import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isSetToken, getCookie } from "./Common";

const PrivateRoute = ({ component: Component, ...res }) => {
  console.log(getCookie("BuildCommunication"));
  return (
    <Route
      {...res}
      render={(props) => {
        return (getCookie("BuildCommunication") && isSetToken()) === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
