import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Player = React.memo(function Player({forcePlay, previewSrc, posterSrc, autoPlay, muted}) {
  const videoEl = useRef(null);
  const [playStatus, setPlayingStatus] = useState(false);

  useEffect(() => {
    if (!forcePlay && !playStatus) {
      return;
    }

    if (forcePlay && !playStatus) {
      videoEl.current.play();
    } else if (playStatus && !forcePlay) {
      videoEl.current.pause();
    }

    setPlayingStatus(!videoEl.current.paused);
  }, [forcePlay]);


  return <video
    ref={videoEl}
    src={previewSrc}
    autoPlay={autoPlay}
    muted={muted}
    poster={posterSrc}
    className={`small-player` + (playStatus ? ` small-player_play` : ``)}
  />;

});

Player.propTypes = {
  // принудительное состояние воспроизведния/пауза извне
  forcePlay: PropTypes.bool,
  // ссылка на превью
  previewSrc: PropTypes.string.isRequired,
  // ссылка на постер
  posterSrc: PropTypes.string,
  // автоплей
  autoPlay: PropTypes.bool,
  // состояние звука
  muted: PropTypes.bool
};
