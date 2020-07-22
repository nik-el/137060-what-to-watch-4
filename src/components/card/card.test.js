import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from "redux-mock-store";

import {Card} from './card';
import {testFilm} from '../../utils/test.utils';

const mockStore = configureMockStore();

const onCardMouseEnter = () => {};

it(`Card renders correctly`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Card
              film={testFilm}
              onCardMouseEnter={onCardMouseEnter}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
