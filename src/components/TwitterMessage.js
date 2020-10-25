import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : "",
    };
  }

  handleChange = (e) => {
    this.setState({
      message : e.target.value
    })
  }

  render() {
    const counter = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} type="text" name="message" id="message" onChange={this.handleChange}/>
        <p>
          {counter} letters left 
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
