import React from 'react';
import renderer from 'react-test-renderer';

import {TextReview} from './text-review';

it(`Rating renders correctly`, () => {
  const tree = renderer
    .create(
        <TextReview />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

