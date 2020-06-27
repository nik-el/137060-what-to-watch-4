import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Player = React.memo(function Player({forcePlay, previewSrc, autoPlay, muted}) {
  const videoEl = useRef(null);
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    if (!forcePlay && !isPlay) {
      return;
    }

    if (forcePlay && !isPlay) {
      videoEl.current.play();
    } else if (isPlay && !forcePlay) {
      videoEl.current.pause();
    }

    setPlay(!videoEl.current.paused);
  }, [forcePlay]);


  return <video
    ref={videoEl}
    src={previewSrc}
    autoPlay={autoPlay}
    muted={muted}
    className={`small-player` + (isPlay ? ` small-player_play` : ``)}
  />;

});

Player.propTypes = {
  // принудительное состояние воспроизведния/пауза извне
  forcePlay: PropTypes.bool,
  // ссылка на превью
  previewSrc: PropTypes.string.isRequired,
  // автоплей
  autoPlay: PropTypes.bool,
  // состояние звука
  muted: PropTypes.bool
};
