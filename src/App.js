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
      input: ''
    }
  }
  //search  needs to send new a prop that sends data back up to this (displatedData)

  componentWillMount() {

    // ^^ const data = this.props.data
    const newDistrict = new DistrictRepository(kinderData)
    // const makeArray = Object.keys(newDistrict)
    const keys = Object.keys(newDistrict.data)
    const dataArray = keys.map(loc => {
      // console.log(loc);
      return {[loc]: newDistrict.data[loc]}
    })
    this.setState({
      dr: dataArray
    })
  }


    commponentDidMount() {

      // ^^ const data = this.props.data
      const newDistrict = new DistrictRepository(kinderData)
      // const makeArray = Object.keys(newDistrict)
      const keys = Object.keys(newDistrict.data)
      const dataArray = keys.map(loc => {
        // console.log(loc);
        return {[loc]: newDistrict.data[loc]}
      })
      this.setState({
        dr: dataArray,
        input: ''
      })
    }

  filteredData() {

  }

  setFilter(e) {
    this.setState({
      input: e
      }
    )
  }

  render() {

    // const data = () => {
    //   console.log(this.state.displatedData)
    //   return !this.state.displatedData? this.state.dr.data : this.state.displatedData
    // }
    return (
      <div>

        <div className="nav">
          <Search setFilter={this.setFilter.bind(this)} />
        </div>

        <div className="hero">
          <h1 className="welcome">Welcome to HeadCount!</h1>
          <p className="description">Look through all of the counties in Colorado for data on kindergartners in a full day program.</p>
        </div>
        <CardList data={ this.state.dr }  />
      </div>

    );
  }
}

export default App;
