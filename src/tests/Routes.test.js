import React from 'react';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router';
import Routes from '../App';
import Nav from '../components/Nav/Nav';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Routes', () => {
  it('should render a <Nav /> component', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });

  it('should render a routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Route)).toHaveLength(2);
  });

  it('should render a Switch', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
});
