import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";

import {Card} from './card';
import {testFilm} from '../../utils/test.utils';
import {BrowserRouter as Router} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureMockStore();

describe(`Card`, () => {
  it(`Should Card be hovered with correct args`, () => {
    const onCardMouseEnter = jest.fn();
    const store = mockStore({});

    const card = mount(
        <Provider store={store}>
          <Router>
            <Card
              film={testFilm}
              onCardMouseEnter={onCardMouseEnter}
            />
          </Router>
        </Provider>
    );

    const cardBlock = card.find(`.small-movie-card`);
    cardBlock.simulate(`mouseenter`);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(testFilm);
  });
});
