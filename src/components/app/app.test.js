import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

import {App} from './app';
import {testFilms, testStore} from '../../utils/test.utils';

const mockStore = configureMockStore();

it(`App renders correctly`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentFilms={testFilms}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

