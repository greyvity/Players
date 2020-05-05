import React from "react";
import AudioDisplay from "./Components/Audio/controlAudio/controlAudio";
import ChangeAudio from "./Components/Audio/ChangeAudio/changeAudio";
import Toggle from "./Components/Toggle/Toggle";
// import "./App.css";

// import vid from "../src/Nilu.mp4";
import Begin from "./Assets/Audio/Begin.mp3";
import cute from "./Assets/Audio/cute.mp3";
import summer from "./Assets/Audio/summer.mp3";
import rock from "./Assets/Audio/rock.mp3";
import ukelele from "./Assets/Audio/ukelele.mp3";
import creative from "./Assets/Audio/creative.mp3";

const sources = {
  begin: Begin,
  cute: cute,
  summer: summer,
  creative: creative,
  ukelele: ukelele,
  rock: rock,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: sources.begin,
      isPlaying: false,
    };
    this.changeSrc = this.changeSrc.bind(this);
    this.player = this.player.bind(this);

    this.audio = new Audio(Begin);
  }

  changeSrc(newSrc) {
    // this.setState({
    //   src: sources[newSrc],
    // });
    this.audio.src = sources[newSrc];
    this.player();
  }

  player() {
    let button = document.querySelector(".Button");
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
      <div className="App">
        <Toggle />
        {/* <ChangeAudio changeSrc={this.changeSrc} />
        <AudioDisplay onClick={this.player} /> */}
      </div>
    );
  }
}

export default App;
