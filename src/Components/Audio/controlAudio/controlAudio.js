import React from "react";

class ControlAudio extends React.Component {
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

export default ControlAudio;
