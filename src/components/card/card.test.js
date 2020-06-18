import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

import {testFilm} from '../../utils/test.utils';

const onCardTitleClick = () => {};
const onCardMouseEnter = () => {};

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<Card
      film={testFilm}
      onCardTitleClick={onCardTitleClick}
      onCardMouseEnter={onCardMouseEnter}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
