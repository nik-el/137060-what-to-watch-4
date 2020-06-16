import React from 'react';
import PropTypes from 'prop-types';

export const Card = React.memo(function Card({title, thumbnail, onCardTitleClick, onCardMouseOver}) {
  return <article
    onMouseOver={onCardMouseOver}
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
  // заголовок карточки
  title: PropTypes.string.isRequired,
  // ссылка на изображение
  thumbnail: PropTypes.string.isRequired,
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func,
  // обработчик ховера на карточку
  onCardMouseOver: PropTypes.func,
};
