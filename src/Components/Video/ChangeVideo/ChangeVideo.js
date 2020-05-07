import React from "react";

class ChangeAudio extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.displayOptions = this.displayOptions.bind(this);
  }
  handleClick(e) {
    this.props.onClick(e.target.innerHTML);
  }

  displayOptions() {
    let options = this.props.videoSources;
    return Object.keys(options).map((option) => (
      <li
        key={option}
        className={this.props.activeOption === option ? "playing" : ""}
      >
        {option}
      </li>
    ));
  }
  render() {
    return (
      <div className="inputs" onClick={this.handleClick}>
        {this.displayOptions()}
      </div>
    );
  }
}
export default ChangeAudio;
