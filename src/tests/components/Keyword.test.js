/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { shallow } from 'enzyme';
import Keyword from '../../components/Search/Keyword';

describe('Keyword', () => {
  it('should render a <TextField /> component', () => {
    const fieldProps = {
      func: jest.fn(),
      props: jest.string,
    };
    const wrapper = shallow(<Keyword {...fieldProps} />);
    expect(wrapper.find(TextField)).toHaveLength(1);
  });
});
