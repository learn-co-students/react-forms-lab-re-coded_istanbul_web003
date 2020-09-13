import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if((this.state.username.length!=0&&this.state.password.length!=0)){
          console.log("logged in")
          this.props.handleLogin()
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
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
