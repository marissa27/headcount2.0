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

  updateInput(e) {
    this.setState({
      input: e.target.value,
    })
    const searchDistricts = new DistrictRepository(kinderData);
    const searchResults = searchDistricts.findAllMatches(this.state.input)
  }

  handleKeyUp() {
    this.props.setFilter(this.state.input);
  }

  render() {
    return (
      <div>
        <input onChange={ (e) => this.updateInput(e) }
               value={this.state.input}
               placeholder="Find your school"
               type="input"
               className="search-input"
               onKeyUp={()=> this.handleKeyUp() }/>
        <input type="button"
               className='reset-button'
               value="Show all schools"/>
      </div>
    )
  }
}
