import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };

  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    let remainingCharacters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessageChange}
        name="message" id="message" value={this.state.message} />
        <p>{remainingCharacters} Character left</p>
      </div>
    );
  }
}

export default TwitterMessage;
