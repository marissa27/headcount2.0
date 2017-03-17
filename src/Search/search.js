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

  handleSubmitButton(e) {
    this.setState({
      input: e.target.value,
    })
    const searchDistricts = new DistrictRepository(kinderData);
    const searchResults = searchDistricts.findAllMatches(this.state.input)
     this.props.filter(searchResults)
     console.log(searchResults)

  }

  render() {
    return (
      <div>
        <input onChange={ (e) => this.handleSubmitButton(e) } value={this.state.input} placeholder="Find your school" type="input" className="search-input"/>
        <input type="button" className='reset-button' value="Show all schools"/>
      </div>
    )
  }
}
