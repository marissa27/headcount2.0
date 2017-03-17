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
      dr: [],
      // displayedData: []
    }
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

  updateData(data) {
    this.setState({
      displatedData: data
    })
  }

  render() {

    // const data = () => {
    //   console.log(this.state.displatedData)
    //   return !this.state.displatedData? this.state.dr.data : this.state.displatedData
    // }
    return (
      <div>
        <div className="nav">
          <Search data={this.state.dr.data} filter={this.updateData.bind(this)}/>
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

export default App;
