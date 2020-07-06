import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more';

const onShowMoreClick = () => {};
const testLimit = 1;

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          offset={testLimit}
          onShowMoreClick={onShowMoreClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

