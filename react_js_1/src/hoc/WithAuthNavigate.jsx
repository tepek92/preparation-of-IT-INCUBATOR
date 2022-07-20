import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
      isAuthorized: state.auth.isAuthorized
    };
  };

const WithAuthNavigate = (Component) => {
  let AuthNavigateComponent = (props) => {
    return props.isAuthorized ? (
      <Component {...props} />
    ) : (
      <Navigate to={"/login"} />
    );
  };
  return connect(mapStateToProps)(AuthNavigateComponent);
};




export default WithAuthNavigate;
