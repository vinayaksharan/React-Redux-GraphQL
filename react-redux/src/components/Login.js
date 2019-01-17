import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <p>Login</p>
        <label>Username</label>
        <input
          label="username"
          name={"username"}
          value={username}
          onChange={this.handleLogin}
        />{' '}
        <label>Password</label>
        <input
          label="password"
          name={"password"}
          value={password}
          onChange={this.handleLogin}
        />{' '}
        <br/><br/>
        <button onClick={this.onLogin}> Login </button>
      </div>
    );
  }
}

export default Login;
