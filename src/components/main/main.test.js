import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

import data from './mocks/data.json';
const onCardTitleClick = () => {};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      {...data}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

