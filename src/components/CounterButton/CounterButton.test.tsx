import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('Basic test', () => {
  it('Renders the CounterButton component without crashing', () => {
    shallow(<CounterButton color={'lightgreen'} />);
  });
});
