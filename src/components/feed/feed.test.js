import React from 'react';
import renderer from 'react-test-renderer';
import {Feed} from './feed';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilms} from '../../utils/test.utils';

const onCardTitleClick = () => {};

it(`Feed renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Feed
            films={testFilms}
            onCardTitleClick={onCardTitleClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

