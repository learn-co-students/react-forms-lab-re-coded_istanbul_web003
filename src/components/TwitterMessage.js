import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const character = this.props.maxChars - this.state.text.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(e) => this.change(e)}
          type="text"
          name="message"
          id="message"
          value={this.state.text}
        />
        {character}
      </div>
    );
  }
}

export default TwitterMessage;
