import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleMessageChange(event)} name="message" value={this.state.message} id="message" />
        <small>{this.props.maxChars - this.state.message.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
