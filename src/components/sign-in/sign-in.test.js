import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";

import {SignIn} from './sign-in';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {testStore} from "../../utils/test.utils";

const mockStore = configureMockStore();

it(`SignIn renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <SignIn />
          </Router>
        </Provider>

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

