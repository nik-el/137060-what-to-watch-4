import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

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

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App {...data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

