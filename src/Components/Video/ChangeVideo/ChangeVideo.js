import React from "react";

class ChangeAudio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.changeSrc(e.target.value);
  }
  render() {
    return (
      <div className="inputs">
        <form action="#" defaultChecked="begin" onClick={this.handleChange}>
          <input type="radio" name="selection" value="poem" /> poem
          <input type="radio" name="selection" value="song" /> song
          <input type="radio" name="selection" value="corona" defaultChecked />
          corona
          <input type="radio" name="selection" value="dogs" /> dogs
          <input type="radio" name="selection" value="funny" /> funny
          <input type="radio" name="selection" value="gaming" /> gaming
        </form>
      </div>
    );
  }
}
export default ChangeAudio;
