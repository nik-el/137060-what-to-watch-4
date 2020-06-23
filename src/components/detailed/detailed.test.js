import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter, Route} from "react-router-dom";
import {Detailed} from './detailed';

import {testFilms} from '../../utils/test.utils';
const currentTestFilmId = testFilms[0].id;

it(`Detailed renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`detailed/${currentTestFilmId}`]}>
          <Route path={`detailed/:id`}>
            <Detailed
              films={testFilms}
              match={{params: {id: currentTestFilmId}}}
            />
          </Route>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
