import React from "react";
import ControlAudio from "./Components/Audio/controlAudio/controlAudio";
import ChangeAudio from "./Components/Audio/ChangeAudio/changeAudio";
import ChangeVideo from "./Components/Video/ChangeVideo/ChangeVideo";
import ControlVideo from "./Components/Video/controlVideo/controlVideo";
import "./App.css";

import Begin from "./Assets/Audio/Begin.mp3";
import cute from "./Assets/Audio/cute.mp3";
import summer from "./Assets/Audio/summer.mp3";
import rock from "./Assets/Audio/rock.mp3";
import ukelele from "./Assets/Audio/ukelele.mp3";
import creative from "./Assets/Audio/creative.mp3";

const audioSources = {
  begin: Begin,
  cute: cute,
  summer: summer,
  creative: creative,
  ukelele: ukelele,
  rock: rock,
};

const videoSources = {
  funny: "https://youtube.com/embed/JYNyQcblzgI",
  corona: "https://www.youtube.com/embed/BtN-goy9VOY",
  dogs: "https://youtube.com/embed/wtH-hdOF1uA",
  poem: "https://youtube.com/embed/vAOTH6vMJ6Q",
  gaming: "https://youtube.com/embed/wl0rZjxgP6E",
  song: "https://youtube.com/embed/EPGNU1IWPko",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    // state values
    this.state = {
      status: "none",
      videoSrc: videoSources["corona"],
    };

    //audio Element
    this.audio = new Audio(Begin);

    // binding this to all the functions
    this.changeSrc = this.changeSrc.bind(this);
    this.audioPlayer = this.audioPlayer.bind(this);
    this.onclick = this.onclick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // changes the source of the audio and vidoe(whichever is active)
  changeSrc(newSrc) {
    if (this.state.status === "audio") {
      this.audio.src = audioSources[newSrc];
      this.audioPlayer();
    } else if (this.state.status === "video") {
      this.setState({
        videoSrc: videoSources[newSrc],
      });
      console.log("here");
    }
  }

  // controls the audio
  audioPlayer() {
    let button = document.querySelector(".Button");
    if (this.audio.paused) {
      this.audio.play();
      button.innerHTML = "Pause";
    } else {
      this.audio.pause();
      button.innerHTML = "Play";
    }
  }

  handleClick(e) {
    this.onclick(e.target.className);
  }

  onclick(property) {
    console.log(property);
    if (property === "audio-card card") {
      this.setState({
        status: "audio",
      });
    } else if (property === "video-card card") {
      this.setState({
        status: "video",
      });
    } else {
      this.setState({
        status: "none",
      });
    }
  }

  render() {
    if (this.state.status === "audio") {
      return (
        <div className="app audio-app">
          <ControlAudio onClick={this.audioPlayer} />
          <ChangeAudio changeSrc={this.changeSrc} />
        </div>
      );
    } else if (this.state.status === "video") {
      return (
        <div className="app video-app">
          <ControlVideo src={this.state.videoSrc} />
          <ChangeVideo changeSrc={this.changeSrc} />
        </div>
      );
    } else {
      return (
        <div className="home">
          <div className="container">
            <div className="audio-card card" onClick={this.handleClick}>
              <h3 onClick={this.handleClick}>Audio</h3>
            </div>

            <div className="video-card card" onClick={this.handleClick}>
              <h3 onClick={this.handleClick}>Video</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
