import React from 'react';
import renderer from 'react-test-renderer';

import {FavoriteButton} from './favorite-button';
import {Provider} from "react-redux";
import {testFilm, testStore} from '../../utils/test.utils';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

it(`FavoriteButton renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <FavoriteButton
            id={testFilm.id}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

