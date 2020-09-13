import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  saveUser = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(this.state.username.length > 0 && this.state.password.length > 0) ? this.props.handleLogin : event => event.preventDefault()}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.saveUser} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.saveUser} type="password" />
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
