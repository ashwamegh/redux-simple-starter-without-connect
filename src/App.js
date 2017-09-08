import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {  

  // Function to call the increment dispatching event
  incrementCount(){
    const { incrementCount} = this.props;
    incrementCount();
  }

  // Function to call the decrement dispatching event
  decrementCount(){
    const { decrementCount } = this.props;
    decrementCount();
  }

  render() {
    const { state:{ count } } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Counter</h2>
        </div>
        <div className="app-dashboard">
          <h2>Count Your Clicks</h2>
          <p className="count" >{ count }</p>
          <button type="primary" onClick={ this.incrementCount.bind(this) } >Increment</button>
          <button type="primary" onClick={ this.decrementCount.bind(this) } >Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
