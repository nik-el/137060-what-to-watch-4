import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Player} from './player';

import {testFilm} from '../../utils/test.utils';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Player`, () => {
  it(`Should call play`, () => {
    const playStub = jest
      .spyOn(window.HTMLMediaElement.prototype, `play`)
      .mockImplementation(() => {});

    const player = mount(<Player
      previewSrc={testFilm.preview}
    />);

    player.setProps({forcePlay: true});
    expect(playStub).toHaveBeenCalled();
  });
});
