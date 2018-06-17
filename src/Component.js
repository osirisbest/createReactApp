import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Comp.propTypes={
    test: PropTypes.string
}

export default Comp;