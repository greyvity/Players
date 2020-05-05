import React from "react";
import "./Toggle.css";

class Toggle extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="audio card">
          <h3>Audio</h3>
        </div>

        <div className="video card">
          <h3>Video</h3>
        </div>
      </div>
    );
  }
}

export default Toggle;
