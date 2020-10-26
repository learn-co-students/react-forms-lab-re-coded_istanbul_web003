import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange ={this.handleInputChange} />
        <span>
          Characters left: {this.props.maxChars - this.state.value.length}
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
