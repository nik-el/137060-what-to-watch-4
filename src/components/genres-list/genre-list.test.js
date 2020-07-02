import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilms, testGenres} from '../../utils/test.utils';

const onGenreClick = () => {};

it(`GenresList renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <GenresList
            films={testFilms}
            genres={testGenres}
            currentGenre={testGenres[0]}
            onGenreClick={onGenreClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

