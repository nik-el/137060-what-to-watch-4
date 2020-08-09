import React from 'react';
import renderer from 'react-test-renderer';

import {Logo} from './logo';
import {MemoryRouter, Route} from "react-router-dom";

it(`Logo renders correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/`]}>
          <Route path={`/`}>
            <Logo />
          </Route>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

