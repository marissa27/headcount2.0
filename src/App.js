import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/cardList.js';
import Search from './Search/search.js';


class App extends Component {
  render() {
    return (
      <div className="welcome">Welcome To Headcount 2.0
        <Search/>
        <CardList />
      </div>
    );
  }
}

export default App;
