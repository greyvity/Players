import React from "react";
import ChangeVideo from "../ChangeVideo/ChangeVideo";

const videoSources = {
  funny: "https://youtube.com/embed/JYNyQcblzgI",
  corona: "https://www.youtube.com/embed/BtN-goy9VOY",
  dogs: "https://youtube.com/embed/wtH-hdOF1uA",
  poem: "https://youtube.com/embed/vAOTH6vMJ6Q",
  gaming: "https://youtube.com/embed/wl0rZjxgP6E",
  song: "https://youtube.com/embed/EPGNU1IWPko",
};

class AudioDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: videoSources["corona"],
      activeOption: "corona",
    };
    this.changeSrc = this.changeSrc.bind(this);
  }

  changeSrc(newSrc) {
    if (Object.keys(videoSources).includes(newSrc)) {
      this.setState({
        videoSrc: videoSources[newSrc],
        activeOption: newSrc,
      });
    }
  }

  render() {
    return (
      <div className="video-app app">
        <iframe
          title={this.state.videoSrc}
          width="800"
          height="500"
          src={this.state.videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <ChangeVideo
          onClick={this.changeSrc}
          videoSources={videoSources}
          activeOption={this.state.activeOption}
        />
      </div>
    );
  }
}

export default AudioDisplay;
