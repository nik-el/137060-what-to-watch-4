import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card';

Enzyme.configure({
  adapter: new Adapter()
});

const title = `Test title`;

it(`Should Card title be clicked`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Card
        onCardTitleClick={onCardTitleClick}
        title={title}
      />
  );

  const cardTitle = main.find(`.small-movie-card__title`);
  cardTitle.props().onClick();
  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
