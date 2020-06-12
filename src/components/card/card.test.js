import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

const name = `Terminator`;

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<Card name={name} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
