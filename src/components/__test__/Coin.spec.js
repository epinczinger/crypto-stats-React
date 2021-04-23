import React from 'react';
import renderer from 'react-test-renderer';
import Coin from '../Coin';

describe('The Coin component', () => {
  it('renders as expected matching snapshot', () => {
    const tree = renderer.create(<Coin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
