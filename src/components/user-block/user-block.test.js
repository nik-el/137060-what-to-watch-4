import React from 'react';
import renderer from 'react-test-renderer';

import {UserBlock} from './user-block';
import {Provider} from "react-redux";
import {testStore} from '../../utils/test.utils';
import configureMockStore from "redux-mock-store";
import {MemoryRouter, Route} from "react-router-dom";
const mockStore = configureMockStore();


const testAvatarUrl = `test`;

it(`UserBlock renders correctly`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/my-list}`]}>
            <Route path={`/my-list`}>
              <UserBlock
                isAuth
                avatarUrl={testAvatarUrl}
              />
            </Route>
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

