import React, { Component } from 'react';
import './App.css';
import HeroList from './components/HeroList/HeroList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroList />
      </div>
    );
  }
}

export default App;
