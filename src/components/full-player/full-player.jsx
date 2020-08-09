import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import {geVideoDuration} from "../../utils/get-duration.utils";
import history from './../../history';

export const FullPlayer = React.memo(function FullPlayer({currentFilms}) {
  const videoEl = useRef(null);
  const [timeElapsed, setTimeElapsed] = useState(`00:00:00`);
  const [progressPercent, setProgressPercent] = useState(`0`);
  const [isPlaying, setPlayingStatus] = useState(false);

  const {id} = useParams();
  const film = currentFilms.find((item) => item.id === id);

  const handleVideoTimeUpdate = () => {
    const time = geVideoDuration(videoEl.current.duration - videoEl.current.currentTime);

    const progress = 100 * videoEl.current.currentTime / videoEl.current.duration;
    setProgressPercent(progress.toFixed(2));
    setTimeElapsed(time);
  };

  const handleVideoPlayStatus = () => {
    const video = videoEl.current;
    setPlayingStatus(!video.paused);
  };

  const handlePlayClick = () => {
    const video = videoEl.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setPlayingStatus(!video.paused);
  };

  const handleFullScreenClick = () => {
    const video = videoEl.current;
    video.requestFullscreen();
  };

  const handleExitClick = () => {
    const video = videoEl.current;
    video.pause();
    history.goBack();
  };

  return <div className="player">
    <video
      autoPlay
      src={film.video}
      className="player__video"
      poster={film.bgImage}
      ref={videoEl}
      onTimeUpdate={handleVideoTimeUpdate}
      onPlay={handleVideoPlayStatus}
    >
    </video>

    <button
      type="button"
      className="player__exit"
      onClick={handleExitClick}
    >
      Exit
    </button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progressPercent} max="100"/>
          <div
            className="player__toggler"
            style={{
              left: progressPercent + `%`
            }}
          >Toggler</div>
        </div>
        <div className="player__time-value">{ timeElapsed }</div>
      </div>

      <div className="player__controls-row">
        <button
          type="button"
          className="player__play"
          onClick={handlePlayClick}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">{film.title}</div>

        <button
          type="button"
          className="player__full-screen"
          onClick={handleFullScreenClick}
        >
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"/>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;

});

FullPlayer.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.object),
};
