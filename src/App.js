import React, { Component } from "react";
import * as firebase from "firebase";

//  Imports configuration for firebase app
import config from "./firebase.config.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: ""
    };
  }

  componentWillMount() {
    firebase.initializeApp(config);
    const _this = this;
    const counter = firebase.database().ref("counter");
    counter.on("value", snapshot => {
      _this.setState({
        count: snapshot.val().count
      });
    });
  }

  // Function to call the increment dispatching event
  incrementCount() {
    const counter = firebase.database().ref("counter");
    counter.set({
      count: this.state.count + 1
    });
  }

  // Function to call the decrement dispatching event
  decrementCount() {
    const counter = firebase.database().ref("counter");
    const { count } = this.state
    count!==0?counter.set({
      count: count - 1
    }):undefined;
  }

  reset(){
    const counter = firebase.database().ref("counter");
    counter.set({
      count: 0
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Counter</h2>
        </div>
        <div className="app-dashboard">
          <h2>Count Your Clicks</h2>
          <p className="count">{count}</p>
          <button type="primary" onClick={this.incrementCount.bind(this)}>
            Increment
          </button>
          <button type="primary" onClick={this.decrementCount.bind(this)}>
            Decrement
          </button>
          <button type="primary" onClick={this.reset.bind(this)}>
          Reset
        </button>
        </div>
      </div>
    );
  }
}

export default App;
