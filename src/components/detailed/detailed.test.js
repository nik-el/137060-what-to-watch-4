import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";

import {Detailed} from './detailed';
import {testFilms, testStore} from '../../utils/test.utils';

const currentTestFilmId = testFilms[0].id;
const mockStore = configureMockStore();

it(`Detailed renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`review/${currentTestFilmId}`]}>
            <Route path={`films/:id/review`}>
              <Detailed
                currentFilms={testFilms}
                match={{params: {id: currentTestFilmId}}}
              />
            </Route>
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
