import React from "react";
import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <div className="home">
      <div className="container">
        <Link to="/music">
          <div className="audio-card card">
            <h3> Music </h3>
          </div>
        </Link>
      </div>
      <div className="container">
        <Link to="/video">
          <div className="video-card card">
            <h3> Video </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homescreen;
