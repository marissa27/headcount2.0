import React, { Component } from 'react';
import DistrictRepository from '../helper.js';


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
    console.log(e.target.value)
  }

  render() {
    // const dataObj = new DistrictRepository(kinderData)
    return (
      <div>
        <input onChange={(e) => this.userInput(e)} value={this.state.input} placeholder="Find your school" type="input" className="search-input"/>
        <input type="button" className="submit-button" value="go"/>
      </div>
    )
  }
}
