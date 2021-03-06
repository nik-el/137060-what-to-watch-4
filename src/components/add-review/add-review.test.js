import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";

import {testFilms, testStore} from '../../utils/test.utils';
import {AddReview} from "./add-review";

const currentTestFilmId = testFilms[0].id;
const mockStore = configureMockStore();

it(`AddReview renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`films/${currentTestFilmId}`]}>
            <Route path={`films/:id`}>
              <AddReview
                currentFilms={testFilms}
              />
            </Route>
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
