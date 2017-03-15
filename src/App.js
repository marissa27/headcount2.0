import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/cardList.js';
import Search from './Search/search.js';


class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <h1 className="welcome">Weclome to Headcount</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
