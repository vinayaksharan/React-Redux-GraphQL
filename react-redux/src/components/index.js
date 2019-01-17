import React, { Component } from "react";
// import logo from "./logo.svg";
import "../style/App.css";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>Welcome To React World</p>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
