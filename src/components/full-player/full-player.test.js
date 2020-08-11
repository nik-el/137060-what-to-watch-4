import React from 'react';
import renderer from 'react-test-renderer';
import {FullPlayer} from './full-player';
import {testFilms} from '../../utils/test.utils';
import {MemoryRouter, Route} from "react-router-dom";

const currentTestFilmId = testFilms[0].id;

it(`FullPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`player/${currentTestFilmId}`]}>
          <Route path={`player/:id`}>
            <FullPlayer
              currentFilms={testFilms}
            />
          </Route>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

