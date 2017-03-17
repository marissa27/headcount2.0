import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/cardList.js';
import Search from './Search/search.js';
import DistrictRepository from './helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dr: [],
      // displayedData: []
    }
  }

  searchResults(e) {
      this.setState({
        dr: this.state.dr.data.findAllMatches(e)
      })
  }
  //search  needs to send new a prop that sends data back up to this (displatedData)

  componentWillMount() {

    // ^^ const data = this.props.data
    const newDistrict = new DistrictRepository(kinderData)
    // const makeArray = Object.keys(newDistrict)
    this.setState({
      dr: newDistrict
    })
  }

  render() {

  
    return (
      <div>
        <div className="nav">
          <Search searchMatch={(e)=> this.searchResults(e)}/>
        </div>
        <div className="hero">
          <h1 className="welcome">Welcome to HeadCount!</h1>
          <p className="description">Look through all of the counties in Colorado for data on kindergartners in a full day program.</p>
        </div>
        <CardList data={this.state.dr.data}  />
      </div>

    );
  }
}
// data={this.state.dr.data} filter={this.updateData.bind(this)}
export default App;
