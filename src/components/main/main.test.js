import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';

const data = {
  promoItem: {
    title: `The Grand Budapest Hotel`,
    year: 2014,
    genre: `Comedy`
  },
  feedItems: [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Terminator`,
    `Terminator 2`,
    `Terminator 3`
  ]
};

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(<Main {...data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

