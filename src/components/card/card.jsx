import React from 'react';
import PropTypes from 'prop-types';
import {FilmPropTypes} from "../../types/film-prop-types";

export const Card = React.memo(function Card({film, onCardTitleClick, onCardMouseOver}) {
  const {title, thumbnail} = film;

  return <article
    onMouseOver={() => onCardMouseOver(film)}
    className="small-movie-card catalog__movies-card"
  >
    <div className="small-movie-card__image">
      <img src={thumbnail} alt={title} width="280" height="175"/>
    </div>
    <h3
      className="small-movie-card__title"
      onClick={onCardTitleClick}
    >
      <a className="small-movie-card__link" href="#">{title}</a>
    </h3>
  </article>;
});

Card.propTypes = {
  // данные фильма
  film: PropTypes.shape(FilmPropTypes),
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func,
  // обработчик ховера на карточку
  onCardMouseOver: PropTypes.func,
};
