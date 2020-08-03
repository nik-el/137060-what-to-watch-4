import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

import {testStore} from '../../utils/test.utils';

const mockStore = configureMockStore();

it(`GenresList renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <GenresList />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

