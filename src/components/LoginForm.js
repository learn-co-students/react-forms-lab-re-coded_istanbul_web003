import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    })
  }



  handleSubmit(event){
    event.preventDefault();
    if (this.state.username==="" || this.state.password===""){
      alert("Please fill both feilds") 
    }else{
      return this.props.handleLogin(this.state)
    }
  }



  render() {
    console.log(this.state.password)
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}  >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username}
            onChange={event => this.handleUserChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={event => this.handlePassChange(event)} />
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
