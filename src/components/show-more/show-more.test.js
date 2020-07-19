import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more';
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const testLimit = 1;

const mockStore = configureMockStore();

it(`Main renders correctly`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <ShowMore
            offset={testLimit}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

