import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card';

import {testFilm} from '../../utils/test.utils';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Card`, () => {
  it(`Should Card title be clicked`, () => {
    const onCardClick = jest.fn();

    const card = shallow(
        <Card
          film={testFilm}
          onCardClick={onCardClick}
        />
    );

    const cardTitle = card.find(`.small-movie-card__title`);
    cardTitle.props().onClick();
    expect(onCardClick.mock.calls.length).toBe(1);
  });

  it(`Should Card be hovered with correct args`, () => {
    const onCardMouseEnter = jest.fn();

    const card = shallow(
        <Card
          film={testFilm}
          onCardMouseEnter={onCardMouseEnter}
        />
    );

    const cardBlock = card.find(`.small-movie-card`);
    cardBlock.simulate(`mouseenter`);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(testFilm);
  });
});
