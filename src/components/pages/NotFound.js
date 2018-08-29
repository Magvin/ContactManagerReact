import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="text-center" style={{ margin: "50% auto" }}>
      <h1 className="display-4">
        <span className="text-info">404 </span>
        Page not found
      </h1>
      <p className="lead">Sorry that page does not exist</p>
      <button type="button" className="btn btn-outline-info">
        <Link to="/" className="text-info">
          Home
        </Link>
      </button>
    </div>
  );
};
