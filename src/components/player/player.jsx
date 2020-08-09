import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Player = React.memo(function Player({forcePlay, previewSrc, autoPlay, muted}) {
  const videoEl = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const smallPlayerStyle = {
    width: `100%`
  };

  useEffect(() => {
    if (!forcePlay && !isPlaying) {
      return;
    }

    if (forcePlay) {
      videoEl.current.play();
    } else if (!forcePlay) {
      videoEl.current.pause();
    }

    setPlaying(!videoEl.current.paused);
  }, [forcePlay]);


  return <video
    ref={videoEl}
    src={previewSrc}
    autoPlay={autoPlay}
    muted={muted}
    style={smallPlayerStyle}
    className={`small-player`}
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
