import React from 'react';
import renderer from 'react-test-renderer';

import {Rating} from './rating';

it(`Rating renders correctly`, () => {
  const tree = renderer
    .create(
        <Rating />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

