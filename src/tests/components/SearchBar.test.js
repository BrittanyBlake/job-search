import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { shallow } from 'enzyme';
import SearchBar from '../../components/Search/SearchBar';

describe('SearchBar', () => {
  it('should render a <Container /> component', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });
  it('should render a <Grid /> component', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find(Grid)).toHaveLength(3);
  });
});
