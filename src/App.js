import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import logo from './logo.svg';
import './App.css';

  class App extends Component {
  constructor () {
    super();
  }

  render() {
   return (
      <div className="App">
        <div className="App-header wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React santosh</h2>
        </div>

        <Header/>
         <div className ="content">
         </div>

        <Footer/>
      </div>
   );
  }
}

export default App;
