import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input : '',
    }
  }

<<<<<<< HEAD
  // handleSubmitButton(e) {
  //   this.setState({
  //     input: e.target.value,
  //   })
  //   const searchDistricts = new DistrictRepository(kinderData);
  //   const searchResults = searchDistricts.findAllMatches(this.state.input)
  //    this.props.filter(searchResults)


  // }


=======
  updateInput(e) {
    this.setState({
      input: e.target.value,
    })
    const searchDistricts = new DistrictRepository(kinderData);
    // const searchResults = searchDistricts.findAllMatches(this.state.input)
  }

  handleKeyUp() {
    this.props.setFilter(this.state.input);
  }
>>>>>>> 56de1dce4952bfed2ad1d50946957e47d24e7d36

  render() {
    return (
      <div>
<<<<<<< HEAD
        <input onChange={(e) => this.props.searchMatch(e.target.value)} value={this.state.input} placeholder="Find your school" type="input" className="search-input"/>
        <input type="button" className='reset-button' value="Show all schools"/>
=======
        <input onChange={ (e) => this.updateInput(e) }
               value={this.state.input}
               placeholder="Find your school"
               type="input"
               className="search-input"
               onKeyUp={()=> this.handleKeyUp() }/>
        <input type="button"
               className='reset-button'
               value="Show all schools"/>
>>>>>>> 56de1dce4952bfed2ad1d50946957e47d24e7d36
      </div>
    )
  }
}
