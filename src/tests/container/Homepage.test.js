import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../../container/Homepage';
import JobList from '../../components/JobList/JobList';

describe('Homepage', () => {
  it('should render a <JobList /> component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find(JobList)).toHaveLength(1);
  });
});
