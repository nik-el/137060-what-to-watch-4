import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

const testData = {
  promoItem: {
    title: `Test title`,
    year: 2000,
    genre: `test genre`
  },
  films: [
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
  ]
};

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      {...testData}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

