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
        <form action="#" onClick={this.handleChange}>
          <input type="radio" name="selection" value="cute" /> cute
          <input type="radio" name="selection" value="rock" /> rock
          <input type="radio" name="selection" value="summer" /> summer
          <input type="radio" name="selection" value="begin" /> begin
          <input type="radio" name="selection" value="creative" /> creative
          <input type="radio" name="selection" value="ukelele" /> ukelele
        </form>
      </div>
    );
  }
}
export default ChangeAudio;
