import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
    };
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <p>
          Your remaining characters:
          {this.props.maxChars - this.state.value.length}/{this.props.maxChars}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
