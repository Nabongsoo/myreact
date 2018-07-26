import React, { Component } from 'react';
import './App.css';

class Welcome extends React.Component {

  render() {
    return (
      <div>
    <h1>Hello, {this.props.name}</h1> 
    <h3>Hello, {this.props.title} </h3>
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Welcome name="React" title="World"></Welcome>
      </div>
    );
  }
}





export default App;
