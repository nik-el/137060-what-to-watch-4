import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from "redux-mock-store";

import {Main} from './main';

import {testStore, testFilms} from '../../utils/test.utils';

const mockStore = configureMockStore();

it(`Main renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Main
              currentFilms={testFilms}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

