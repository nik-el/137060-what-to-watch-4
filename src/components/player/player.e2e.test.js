import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Player} from './player';

import {testFilm} from '../../utils/test.utils';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Player`, () => {
  Object.defineProperty(window.HTMLMediaElement.prototype, `paused`, {
    get() {
      return this._mock.paused;
    },
  });

  beforeEach(() => {
    window.HTMLMediaElement.prototype._mock = {
      paused: true
    };
  });

  it(`Should player have a pause state`, () => {
    const player = mount(<Player
      previewSrc={testFilm.preview}
    />);
    const videoDOMEl = player.find(`.small-player`).getDOMNode();

    expect(videoDOMEl.paused).toBe(true);
  });

  it(`Should player have a play state`, () => {
    const player = mount(<Player
      previewSrc={testFilm.preview}
    />);
    const videoDOMEl = player.find(`.small-player`).getDOMNode();

    const playStub = jest
      .spyOn(window.HTMLMediaElement.prototype, `play`)
      .mockImplementation(function () {
        videoDOMEl._mock.paused = false;
      });

    player.setProps({forcePlay: true});
    expect(playStub).toHaveBeenCalled();
    expect(videoDOMEl.paused).toBe(false);
  });
});
