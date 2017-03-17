import React, { Component } from 'react';
// import DistrictRepository from '../helper.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Card from '../Card/card.js';
import '../App.css';

export default class CardList extends Component  {

    render() {

      const { data } = this.props;
      // ^^ const data = this.props.data
      const keys = Object.keys(this.props.data)
      // console.log(keys)
      const locationCards = keys.map((loc, i) => {

        return(
          <Card key={i} loc={ loc } locData={ data[loc].data }/>
        )
      })
        return (
            <div className="card">
              { locationCards }
            </div>
        );
    }
}
