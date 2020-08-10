import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {FilmPropTypes} from "../../types/film-prop-types";

import {Player} from '../player/player';
import {useDispatch} from "react-redux";
import {ActionCreator as ActionCreatorView} from "../../reducer/view/actions";
import history from "../../history";

const VIDEO_DELAY = 1000;

export const Card = React.memo(function Card({film, onCardMouseEnter}) {
  const {title, thumbnail, preview, genre, id} = film;

  const dispatch = useDispatch();
  const [isShowPlayer, setShowPlayer] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleCardClick = useCallback(() => {
    history.push(`/detailed/${id}`);
    dispatch(ActionCreatorView.setGenre(genre));
  }, [genre]);

  const handleCardMouseEnter = useCallback(() => {
    onCardMouseEnter(film);
    const playId = setTimeout(() => {
      setShowPlayer(true);
    }, VIDEO_DELAY);
    setTimerId(playId);
  }, [film]);

  const handleCardMouseLeave = () => {
    onCardMouseEnter(null);
    clearTimeout(timerId);
    setShowPlayer(false);
  };

  return <article
    onMouseEnter={handleCardMouseEnter}
    onMouseLeave={handleCardMouseLeave}
    className="small-movie-card catalog__movies-card"
    onClick={handleCardClick}
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
