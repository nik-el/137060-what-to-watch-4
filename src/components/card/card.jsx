import React from 'react';
import PropTypes from 'prop-types';

export const Card = React.memo(function Card({name}) {
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{name}</a>
    </h3>
  </article>;
});

Card.propTypes = {
  // заголовок карточки
  name: PropTypes.string.isRequired,
};
