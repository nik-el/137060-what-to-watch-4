import React from 'react';
import renderer from 'react-test-renderer';

import {MyList} from './my-list';
import {Provider} from "react-redux";
import {testStore} from '../../utils/test.utils';
import configureMockStore from "redux-mock-store";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureMockStore();

it(`MyList renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MyList />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

