import React from "react";
class AudioDisplay extends React.Component {
  render() {
    return (
      <div className="display">
        <iframe
          width="800"
          height="500"
          src={this.props.src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default AudioDisplay;
