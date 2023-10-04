import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="not-found">
        <h2 className="display-4 text-warning">Oops! Sorry...</h2>
        <hr className="my-4" />
        <p className="lead">This URL Page Cannot Be Found.</p>
        <NavLink to="/" className="btn btn-outline-dark">
          Back to the Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
