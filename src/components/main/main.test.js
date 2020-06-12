import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

import data from './mocks/data.json';

const onPromoClick = () => {};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      {...data}
      onPromoClick={onPromoClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

