import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: null,
      messageLeangth: 0
    };
  }

  handleMessage(event) {
    this.setState({
      message: event.target.value,
      messageLeangth: event.target.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        maxLength={this.props.maxChars} 
        value={this.state.message} 
        onChange={event => this.handleMessage(event)}/>
        <p>Remmaining letters: <strong>{this.props.maxChars-this.state.messageLeangth}</strong></p>
      </div>
    );
  }
}

export default TwitterMessage;
