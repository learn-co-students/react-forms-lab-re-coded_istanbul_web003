import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: "",
      length: props.maxChars
    };
  }

  handleChars = (event) => {
    this.setState({
      input: event.target.value,
      length: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.input}, {this.state.length} in {this.props.maxChars}</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={event => this.handleChars(event)}/>
      </div>
    );
  }
}

export default TwitterMessage;
