import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

import {testPromo, testFilms} from '../../utils/test.utils';

const onCardTitleClick = () => {};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      films={testFilms}
      promoItem={testPromo}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

