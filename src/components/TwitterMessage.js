import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  handleChange = (e)=>{
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={event => this.handleChange(event)}
          maxLength={this.props.maxChars}
          value={this.state.message}
        />
        <p>Letters left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
