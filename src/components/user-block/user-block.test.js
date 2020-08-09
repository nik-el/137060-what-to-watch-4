import React from 'react';
import renderer from 'react-test-renderer';

import {UserBlock} from './user-block';

const testAvatarUrl = `test`;

it(`UserBlock renders correctly`, () => {
  const tree = renderer
    .create(
        <UserBlock
          isAuth
          avatarUrl={testAvatarUrl}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

