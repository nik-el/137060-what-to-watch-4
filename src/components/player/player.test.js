import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from './player';
import {BrowserRouter as Router} from 'react-router-dom';

import {testFilm} from '../../utils/test.utils';

it(`Player renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Player
            previewSrc={testFilm.preview}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

