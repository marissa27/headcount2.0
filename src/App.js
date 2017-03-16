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
        <Search data={this.state.dr.data}/>
        <h1 className="welcome">Welcome to Headcount</h1>
        <CardList data={this.state.dr.data} />
      </div>
    );
  }
}

export default App;
