import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

const testFilm = {
  title: `Title`,
  thumbnail: `https://picsum.photos`,
  id: `test id`
};

const onCardTitleClick = () => {};
const onCardMouseOver = () => {};

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<Card
      film={testFilm}
      onCardTitleClick={onCardTitleClick}
      onCardMouseOver={onCardMouseOver}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
