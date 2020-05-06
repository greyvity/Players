import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ControlAudio from "./Components/Audio/ControlAudio/ControlAudio";
import ControlVideo from "./Components/Video/ControlVideo/ControlVideo";
import Homescreen from "./Components/Homescreen/Homescreen";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Homescreen} />
          <Route path="/music" component={ControlAudio} />
          <Route path="/video" component={ControlVideo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
