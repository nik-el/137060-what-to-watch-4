import React from 'react';
import renderer from 'react-test-renderer';
import {Detailed} from './detailed';

import {testFilm} from '../../utils/test.utils';

it(`Detailed renders correctly`, () => {
  const tree = renderer
    .create(<Detailed
      film={testFilm}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
