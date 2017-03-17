
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
  });

  it('Card should render', () => {
    const data = {2004: 0, 2005: 0.006, 2006: 0, 2007: 0, 2008: 0, 2009: 1, 2010: 1, 2011: 1, 2012: 1}

    const wrapper = shallow( <Card numbers={ data } /> )
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('.district-card').length).toEqual(1)
    expect(wrapper.find('ul').length).toEqual(9)
  })
});
