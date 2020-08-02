import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";

import {testFilms} from '../../utils/test.utils';
import {AddReview} from "./add-review";

const currentTestFilmId = testFilms[0].id;
const mockStore = configureMockStore();

it(`Detailed renders correctly`, () => {
  const store = mockStore({
    films: testFilms
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`detailed/${currentTestFilmId}`]}>
            <Route path={`detailed/:id`}>
              <AddReview
                currentFilm={testFilms}
              />
            </Route>
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
