import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import Card from '../Card/card.js';


export default class CardList extends Component  {
    render() {
      const dataObj = new DistrictRepository(kinderData);
      console.log(dataObj)

        return (
            <div>
              <Card helperObj={dataObj} />
            </div>
        );
    }
}
