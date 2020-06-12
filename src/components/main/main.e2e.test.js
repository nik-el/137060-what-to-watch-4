import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';

import data from './mocks/data.json';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should Promo item be clicked`, () => {
  const onPromoClick = jest.fn();

  const main = shallow(
      <Main
        onPromoClick={onPromoClick}
        {...data}
      />
  );

  const promoTitle = main.find(`.movie-card__title`);
  promoTitle.props().onClick();
  expect(onPromoClick.mock.calls.length).toBe(1);
});
