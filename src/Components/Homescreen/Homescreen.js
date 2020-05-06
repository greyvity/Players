import React from "react";
import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <div className="home">
      <div className="container">
        <Link style={{ textDecoration: "none" }} to="/music">
          <div className="audio-card card">
            <h3> Audio</h3>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/video">
          <div className="video-card card">
            <h3> Video </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homescreen;
