import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  handleInputChange(event) {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    if (this.state.username===null){
      alert("Please fill both feilds") 
    }else{
      return this.props.handleLogin
    }
  }



  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username}
            onChange={event => this.handleInputChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={event => this.handleInputChange(event)} />
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
