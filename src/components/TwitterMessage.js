import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      counter: this.props.maxChars
    };
  }

handleChange = e => {
    this.setState({value: e.target.value})
    console.log(this.state.counter)
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange= {e => this.handleChange(e)}value={this.state.value}/>
        <p>{this.state.counter - this.state.value.length}</p>/>
      </div>
    );
  }
}

export default TwitterMessage;
