import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

const onCardTitleClick = () => {};

const testData = {
  promoItem: {
    title: `Test title`,
    year: 2000,
    genre: `test genre`
  }
};

const testFilms = [
  {
    title: `Test 1`,
    thumbnail: `https://picsum.photos/id/1`,
    id: `1`,
  },
  {
    title: `Test 2`,
    thumbnail: `https://picsum.photos/id/2`,
    id: `2`,
  },
];

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main
      {...testData}
      films={testFilms}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

