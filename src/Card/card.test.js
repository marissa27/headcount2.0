
import Card from '../Card/card'
import { shallow, mount } from 'enzyme'
import React from 'react';

import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictCard tests', () =>  {
  const district = new DistrictRepository(kinderData);
  const exampleData = district.findByName('Colorado')

  test('districtCard has class of district-card', () => {
    const wrapper = shallow(<Card districtData={exampleData} />)
    expect(wrapper.hasClass('district-card')).toBe(true);
  });

  test('card displays all data provided', () => {
    const wrapper = shallow(<Card districtData={exampleData} />)
    expect(wrapper.find('.school-title').length).toBe(11);
  })
});











// import React from 'react';
// import { shallow, mount } from 'enzyme'
// import DistrictRepository from '../../src/helper.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';
// import Card from '../Card/card.js'
//
//
// describe('Card', () => {
//
//   it('Has a class of district card', () => {
//     const wrapper = shallow(<Card/>)
//     expect(wrapper.find('.district-card').length).toEqual(1)
//   });
//
//
// })
