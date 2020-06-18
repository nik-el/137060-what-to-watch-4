import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

import {testPromo, testFilms} from '../../utils/test.utils';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      films={testFilms}
      promoItem={testPromo}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

