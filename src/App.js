import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const text = '당신은 어썸한간요?';
    return (
      <div>
      <h1>리액트 안녕!</h1>
      <h2>{text}</h2>
      </div>
    );
  }
}

export default App;