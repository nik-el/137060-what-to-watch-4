import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Player} from './player';

import {testFilm} from '../../utils/test.utils';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Player`, () => {
  it(`Should Player be on play status`, () => {
    const player = shallow(
        <Player
          previewSrc={testFilm.preview}
          forcePlay={true}
        />
    );
    const videoEl = player.find(`.small-player`);
    expect(videoEl.hasClass(`small-player`)).toBe(true);

  });

});
