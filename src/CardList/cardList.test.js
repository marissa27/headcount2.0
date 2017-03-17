import React from 'react';
import { shallow, mount } from 'enzyme'
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';



describe('cardList', () => {

  it('Has a class of card', () => {
    const wrapper = shallow(<cardList/>)
    expect(wrapper.find('card').length).toEqual(1)
  });


})
