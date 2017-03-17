import React, { Component } from 'react';
// import CardList from '../CardList/cardList.js';
import '../App.css';
import classNames from 'classnames';

export default class Card extends Component  {
  constructor() {
    super();

  }
  render() {
    // console.log(this.props.locData)
    const { locData } = this.props
    // console.log(this.props)
    const cardData = Object.keys(locData).map((year, i) => {
      // console.log([year])
      const quality = classNames( {
        'bad': locData[year] <= .49,
        'good': locData[year] >= .5
      })
      return (
        <li className="stats" className={quality} key={i}>{year}: {locData[year]}</li>
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
