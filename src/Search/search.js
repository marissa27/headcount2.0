import React, { Component } from 'react';
// import DistrictRepository from '../helper.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input : '',
    }
  }

  userInput(e) {
      this.setState({
      input: e.target.value
    })
    const searchDistricts = this.props.data;
    // debugger
    console.log(this.state.input)
    // console.log(searchDistricts)
     const searchResults = searchDistricts.findAllMatches(this.state.input)
     this.passNewObj(searchResults);
  }

// figure out why findAllMatches isn't being called

// figure that out then pass it to new function that setState
// for the dr

  passNewObj(newObj) {
    console.log(this.searchResults)
    this.setState({
      dr: newObj,
    })
  }

  render() {
    return (
      <div className="nav-bar">
        <input onChange={(e) => this.userInput(e)} value={this.state.input} placeholder="Find your school district" type="input" className="search-input" />
        <input type="button" className='reset-button' value="Show all schools"/>
        {/* <p> { searchResults }</p> */}
      </div>
    )
  }
}
