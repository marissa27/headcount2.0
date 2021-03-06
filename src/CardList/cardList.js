import React, { Component } from 'react';
import Card from '../Card/card.js';
import '../App.css';

export default class CardList extends Component  {

  render() {

    const { data } = this.props;

    const locationCards = data.map((obj, i) => {
      const location = Object.keys(obj)[0]
      return(
        <Card key={i} loc={location} locData={ obj[location].data }/>
      )
    })

    return (
      <div className="card">
        { locationCards }
      </div>
    );
  }
}
