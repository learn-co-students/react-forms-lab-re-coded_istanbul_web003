import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      password: "",
      handleLogin: this.props.handleLogin
    };
  }

  handleSubmit = e => {
    if (this.state.text.length !== 0  && this.state.password.length !== 0){
      this.state.handleLogin(this.state.text, this.state.password)}
    console.log(this.state)
    e.preventDefault()
  }

  handleTextChange = e => {
    this.setState({text: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleTextChange(e)} value = {this.state.text} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handlePasswordChange(e)} value = {this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
