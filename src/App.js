import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component  {
  constructor() {
    super();
      this.pages = ['Home', 'About Me','blog','images','Links'];
    
  }
  render() {
    return (
      <div className="App container">
      <Header 
      pages= {this.pages}

      />
      



      </div>
    );
  }
}

export default App;
