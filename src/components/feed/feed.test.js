import React from 'react';
import renderer from 'react-test-renderer';
import {Feed} from './feed';

const onCardTitleClick = () => {};

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

it(`Feed renders correctly`, () => {
  const tree = renderer
    .create(<Feed
      films={testFilms}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

