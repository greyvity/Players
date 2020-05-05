import React from "react";
class AudioDisplay extends React.Component {
  render() {
    return (
      <div className="display">
        <button className="Button" onClick={this.props.onClick}>
          Play
        </button>
      </div>
    );
  }
}

export default AudioDisplay;
