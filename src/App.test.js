import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});

it('should render a div', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('div')).to.have.length(1)
});

it()
