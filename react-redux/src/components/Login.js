import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import gql from "graphql-tag";
import { graphql, compose, withApollo } from "react-apollo";

export const SIGNIN_USER = gql`
  mutation signinUser($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const payload = {
      username, password
    }
    this.props.loginUser(payload)
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <p>Login</p>

        <form
          onSubmit={e=>this.handleSubmit(e)}
        >
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
          <br /><br />
          <button onClick={this.onLogin}> Login </button>
        </form>
      </div>
    );
  }
}




const LoginWithData = withApollo(
  compose(
    graphql(SIGNIN_USER, {
      props: ({ mutate }) => ({
        loginUser(data) {
          return mutate({
            variables: { data }
          })
        }
      })
    })
  )(Login)
)


export default LoginWithData;
