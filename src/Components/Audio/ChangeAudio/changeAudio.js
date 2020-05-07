import React from "react";

class ChangeAudio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.displayOptions = this.displayOptions.bind(this);
    this.state = {
      activeLink: "begin",
    };
  }

  handleChange(e) {
    this.setState({
      activeLink: e.target.innerHTML,
    });
    this.props.onClick(e.target.innerHTML);
    e.preventDefault();
  }

  displayOptions() {
    let options = this.props.audioSources;
    return Object.keys(options).map((option) => (
      <li
        key={option}
        className={this.state.activeLink === option ? "playing" : ""}
      >
        {option}
      </li>
    ));
  }
  render() {
    return (
      <div className="inputs" onClick={this.handleChange}>
        {this.displayOptions()}
      </div>
    );
  }
}
export default ChangeAudio;
