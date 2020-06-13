import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

const title = `Terminator`;
const onCardTitleClick = () => {};

it(`Card renders correctly`, () => {
  const tree = renderer
    .create(<Card
      title={title}
      onCardTitleClick={onCardTitleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
