import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card';

Enzyme.configure({
  adapter: new Adapter()
});

const testCard = {
  id: `1`,
  title: `Title`,
  thumbnail: `https://picsum.photos`,
};

it(`Should Card title be clicked`, () => {
  const onCardTitleClick = jest.fn();

  const card = shallow(
      <Card
        title={testCard.title}
        thumbnail={testCard.thumbnail}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitle = card.find(`.small-movie-card__title`);
  cardTitle.props().onClick();
  expect(onCardTitleClick.mock.calls.length).toBe(1);
});

it(`Should Card be hovered with correct args`, () => {
  const onCardMouseOver = jest.fn((...args) => [...args]);

  const card = shallow(
      <Card
        title={testCard.title}
        thumbnail={testCard.thumbnail}
        onCardMouseOver={onCardMouseOver}
      />
  );

  const cardBlock = card.find(`.small-movie-card`);
  cardBlock.props().onMouseOver(testCard);
  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(testCard);
});