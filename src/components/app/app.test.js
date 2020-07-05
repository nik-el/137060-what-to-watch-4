import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

import {testFilms, testGenres} from '../../utils/test.utils';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      films={testFilms}
      promoItem={testFilms[0]}
      genres={testGenres}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

