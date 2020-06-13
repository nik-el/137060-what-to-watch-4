import React from 'react';
import PropTypes from 'prop-types';

export const Card = React.memo(function Card({title, onCardTitleClick}) {
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175"/>
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
  // заголовок карточки
  title: PropTypes.string.isRequired,
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func.isRequired,
};
