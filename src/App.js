import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>

        <h1>
          <pre>Login Form</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>Twitter Message</pre>
        </h1>
        <TwitterMessage maxChars={280} />



      </div>
    )
  }
}

export default App
