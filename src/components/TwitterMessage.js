import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.maxChars,
      message: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <label value={this.state.count} onChange={this.handleChange}>{this.state.count}</label>
      </div>
    );
  }
}

export default TwitterMessage;
