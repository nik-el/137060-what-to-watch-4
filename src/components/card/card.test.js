import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilm} from '../../utils/test.utils';

const onCardTitleClick = () => {};
const onCardMouseEnter = () => {};

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Card
            film={testFilm}
            onCardTitleClick={onCardTitleClick}
            onCardMouseEnter={onCardMouseEnter}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
