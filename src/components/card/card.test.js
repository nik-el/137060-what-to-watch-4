import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

const testCard = {
  title: `Title`,
  thumbnail: `https://picsum.photos`,
  onCardTitleClick: () => {},
  onCardMouseOver: () => {},
};

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<Card
      title={testCard.title}
      thumbnail={testCard.thumbnail}
      onCardTitleClick={testCard.onCardTitleClick}
      onCardMouseOver={testCard.onCardMouseOver}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
