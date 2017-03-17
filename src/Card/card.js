import React, { Component } from 'react';
import '../App.css';

export default class Card extends Component  {
  constructor() {
    super();

  }
  render() {

    const { locData } = this.props
    const cardData = Object.keys(locData).map((year, i) => {
      return (
        <li className="stats" key={i}>{year}: {locData[year]}</li>
      )
    })
    return (
      <div className="district-card">
        <h3 className="school-title">{ this.props.loc }</h3>
        <ul>{ cardData }</ul>
      </div>
    );
  }
}

Card.propTypes = {
  loc: React.PropTypes.string
}
