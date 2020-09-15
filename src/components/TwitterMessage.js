import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      wordsRemain: props.maxChars
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      message: value,
      wordsRemain: this.props.maxChars - value.length      
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <span>{this.state.wordsRemain}</span>
      </div>
    );
  }
}

export default TwitterMessage;
