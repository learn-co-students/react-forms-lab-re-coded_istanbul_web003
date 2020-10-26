import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password:""
    };
  }

  handleUserNameChange = event => {
    this.setState({...this.state,
      userName:event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({...this.state,
      password:event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password ) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleUserNameChange} value={this.state.userName} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handlePasswordChange} value={this.state.password} name="password" type="password" />
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
