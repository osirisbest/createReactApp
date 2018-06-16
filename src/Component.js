import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Comp extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
      </div>
    );
  }
}

export default Comp;