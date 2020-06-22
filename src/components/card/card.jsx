import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {FilmPropTypes} from "../../types/film-prop-types";

export const Card = React.memo(function Card({film, onCardTitleClick, onCardMouseEnter}) {
  const {title, thumbnail} = film;

  return <article
    onMouseEnter={() => onCardMouseEnter(film)}
    className="small-movie-card catalog__movies-card"
  >
    <div className="small-movie-card__image">
      <img src={thumbnail} alt={title} width="280" height="175"/>
    </div>
    <h3
      className="small-movie-card__title"
      onClick={() => onCardTitleClick(film.id)}
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
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func,
  // обработчик ховера на карточку
  onCardMouseEnter: PropTypes.func,
};
