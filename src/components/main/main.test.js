import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';
import {BrowserRouter as Router} from 'react-router-dom';

import {testPromo, testFilms} from '../../utils/test.utils';

const onCardClick = () => {};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main
            films={testFilms}
            promoItem={testPromo}
            onCardClick={onCardClick}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

