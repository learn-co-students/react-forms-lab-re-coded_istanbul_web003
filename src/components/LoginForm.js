import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.handleLogin)
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
  }

  render() {
    return (
      <form onSubmit={this.state.username && this.state.password ? this.props.handleLogin: e => e.preventDefault()}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
