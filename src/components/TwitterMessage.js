import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      remainingChars: this.props.maxChars,
    };
  }

  handleTweetChange(e) {
    this.setState({
      tweet: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(e) => {
            this.handleTweetChange(e);
          }}
          value={this.state.tweet}
        />
        <p>{this.state.remainingChars} Characters remained</p>
      </div>
    );
  }
}

export default TwitterMessage;
