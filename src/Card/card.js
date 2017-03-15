import React, { Component } from 'react';
import CardList from '../CardList/cardList.js';

export default class Card extends Component  {
  constructor() {
    super();

  }
    render() {
      // console.log(this.props.locData)
      const { locData } = this.props
      // console.log(this.props)
      const cardData = Object.keys(locData).map((year, i) => {
        // console.log(locData[year])
        return
          <li key={i}>`${year}: ${locData[year]}`</li>
      })
        return (
            <div>
              <h6>{ this.props.loc }</h6>
              <ul>{ cardData }</ul>
            </div>
        );
    }
}
