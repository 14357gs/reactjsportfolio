import React, { Component } from 'react';
import Header from './Components/Header';
import logo from './logo.svg';
import './App.css';

  class App extends Component {
  constructor () {
    super();
  }

  render() {
   return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React santosh</h2>
        </div>

        <Header/>
      </div>
   );
  }
}

export default App;
