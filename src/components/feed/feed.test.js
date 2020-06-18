import React from 'react';
import renderer from 'react-test-renderer';
import {Feed} from './feed';

import {testFilms} from '../../utils/test.utils';

const onCardTitleClick = () => {};

it(`Feed renders correctly`, () => {
  const tree = renderer
    .create(<Feed
      films={testFilms}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

