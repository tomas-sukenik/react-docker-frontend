import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/UI/Navbar/Navbar'
import HeroList from './components/HeroList/HeroList'
import PrivatePage from './components/PrivatePage/PrivatePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route path="/" exact component={HeroList} />
          <Route path="/private-page" component={PrivatePage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
