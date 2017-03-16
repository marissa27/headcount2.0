import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/cardList.js';
import Search from './Search/search.js';
import DistrictRepository from './helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';



class App extends Component {
  constructor() {
    super()
    this.state = {
      dr: {},
    }
  }

  componentWillMount() {
    this.setState({
      dr: new DistrictRepository(kinderData)
    })
  }

  render() {
    return (
      <div>
        <div className="nav">
          <Search data={this.state.dr.data}/>
        </div>
        <div className="hero">
          <h1 className="welcome">Welcome to HeadCount!</h1>
          <p className="description">Look through all of the counties in Colorado for data on kindergartners in a full day program.</p>
        </div>
        <CardList data={this.state.dr.data} />
      </div>

    );
  }
}

export default App;
