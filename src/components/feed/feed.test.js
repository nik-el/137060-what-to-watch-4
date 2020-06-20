import React from 'react';
import renderer from 'react-test-renderer';
import {Feed} from './feed';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilms} from '../../utils/test.utils';

const onCardClick = () => {};

it(`Feed renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Feed
            films={testFilms}
            onCardClick={onCardClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

