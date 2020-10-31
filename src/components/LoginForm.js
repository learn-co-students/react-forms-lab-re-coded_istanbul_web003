import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  usernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.username && this.state.password) {
            this.props.handleLogin(e);
          }
        }}
      >
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(e) => this.usernameChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.passwordChange(e)}
            />
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
