import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    
    super(props);
    console.log(this.props)
    this.state = {
      remainingChar: this.props.maxChars,
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      remainingChar: this.state.remainingChar - 1,
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={this.handleChange}/>
        <span>{this.state.remainingChar}</span>
      </div>
    );
  }
}

export default TwitterMessage;
