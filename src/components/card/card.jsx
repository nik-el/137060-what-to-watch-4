import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {FilmPropTypes} from "../../types/film-prop-types";

import {Player} from '../player/player';
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../reducer";

const VIDEO_DELAY = 1000;

export const Card = React.memo(function Card({film, onCardMouseEnter}) {
  const {title, thumbnail, preview} = film;

  const dispatch = useDispatch();
  const [isShowPlayer, setShowPlayer] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleCardClick = () => {
    dispatch(ActionCreator.setFilter(film.genre));
    dispatch(ActionCreator.getFilmsByGenre(film.genre));
  };

  const handleCardMouseEnter = () => {
    onCardMouseEnter(film);
    const playId = setTimeout(() => {
      setShowPlayer(true);
    }, VIDEO_DELAY);
    setTimerId(playId);
  };

  const handleCardMouseLeave = () => {
    onCardMouseEnter(null);
    clearTimeout(timerId);
    setShowPlayer(false);
  };

  return <article
    onMouseEnter={handleCardMouseEnter}
    onMouseLeave={handleCardMouseLeave}
    className="small-movie-card catalog__movies-card"
  >
    <div className="small-movie-card__image">
      { isShowPlayer ? <Player
        muted
        autoPlay={false}
        forcePlay={isShowPlayer}
        previewSrc={preview}
      /> : <img src={thumbnail} alt={title} width="280" height="175"/> }
    </div>
    <h3
      className="small-movie-card__title"
      onClick={handleCardClick}
    >
      <Link className="small-movie-card__link" to={`/detailed/${film.id}`}>
        {title}
      </Link>
    </h3>
  </article>;
});

Card.propTypes = {
  // данные фильма
  film: PropTypes.shape(FilmPropTypes),
  // обработчик ховера на карточку
  onCardMouseEnter: PropTypes.func,
};
