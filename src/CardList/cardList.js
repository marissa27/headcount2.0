import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Card from '../Card/card.js';


export default class CardList extends Component  {
    render() {
      const dataObj = new DistrictRepository(kinderData);
      // console.log(dataObj)
      const keys = Object.keys(dataObj.data)
      // console.log(keys)
      const locationCards = keys.map((loc, i) => {
        return(
          <Card key={i} loc={ loc } locData={ dataObj.data[loc].data }/>
        )
        // console.log(dataObj.data[loc])
      })
        return (
            <div>
              { locationCards }
            </div>
        );
    }
}
