import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    if(this.state.username.length !==0 && this.state.password.length !==0 ) {
      this.props.handleLogin(this.state.username, this.state.password);
    }
  }

  render() {
     return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)} value={this.state.userName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
          <p>{this.state.username} {this.state.password}</p>
        </div>
      </form>
    );
  }
}

export default LoginForm;
