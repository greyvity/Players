import React from "react";
import ChangeAudio from "../ChangeAudio/ChangeAudio";

import Begin from "../../../Assets/Audio/Begin.mp3";
import cute from "../../../Assets/Audio/cute.mp3";
import summer from "../../../Assets/Audio/summer.mp3";
import rock from "../../../Assets/Audio/rock.mp3";
import ukelele from "../../../Assets/Audio/ukelele.mp3";
import creative from "../../../Assets/Audio/creative.mp3";

const audioSources = {
  begin: Begin,
  cute: cute,
  summer: summer,
  creative: creative,
  ukelele: ukelele,
  rock: rock,
};

class ControlAudio extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(Begin);
    this.audioPlayer = this.audioPlayer.bind(this);
    this.changeSrc = this.changeSrc.bind(this);
  }

  changeSrc(newSrc) {
    console.log(newSrc);
    if (Object.keys(audioSources).includes(newSrc)) {
      this.audio.src = audioSources[newSrc];
      this.audioPlayer();
    }
  }
  // controls the audio
  audioPlayer() {
    let button = document.querySelector("button");
    if (this.audio.paused) {
      this.audio.play();
      button.innerHTML = "Pause";
    } else {
      this.audio.pause();
      button.innerHTML = "Play";
    }
  }

  render() {
    return (
      <div className="app audio-app">
        <button className="Button" onClick={this.audioPlayer}>
          Play
        </button>
        <ChangeAudio onClick={this.changeSrc} audioSources={audioSources} />
      </div>
    );
  }
}

export default ControlAudio;
