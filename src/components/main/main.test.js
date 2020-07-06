import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilms, testGenres} from '../../utils/test.utils';

const onCardTitleClick = () => {};
const onShowMoreClick = () => {};
const onGenreClick = () => {};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main
            films={testFilms}
            genres={testGenres}
            promoItem={testFilms[0]}
            onCardTitleClick={onCardTitleClick}
            onShowMoreClick={onShowMoreClick}
            onGenreClick={onGenreClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

