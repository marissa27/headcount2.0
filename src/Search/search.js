import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

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
  }

  handleSubmitButton(e) {
    this.setState({
      input: e.target.value,
    })
    const searchDistricts = new DistrictRepository(kinderData);
     return searchDistricts.findAllMatches(this.state.input)
  }

  render() {
    // const dataObj = new DistrictRepository(kinderData)
    return (
      <div>
        <input onChange={(e) => this.userInput(e)} value={this.state.input} placeholder="Find your school" type="input" className="search-input"/>
        <input type="button" className="submit-button" value="Go" onClick={(e) => this.handleSubmitButton(e) }/>
        <input type="button" className='reset-button' value="Show all schools"/>
      </div>
    )
  }
}
