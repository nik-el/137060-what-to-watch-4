import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import {Feed} from './feed';
import {testStore, testFilms} from '../../utils/test.utils';

const mockStore = configureMockStore();

it(`Feed renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Feed
              currentFilms={testFilms}
              films={testFilms}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

