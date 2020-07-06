import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';
import {FilmPropTypes} from "../../types/film-prop-types";

export const Feed = React.memo(function Feed({films, limit, onCardTitleClick, className}) {
  const [activeCard, setActiveCard] = useState(null);

  const limitFilms = films.slice(0, limit);

  return (
    <div className={className}>
      { limitFilms.map((film) =>
        (
          <Card
            onCardMouseEnter={setActiveCard}
            onCardTitleClick={onCardTitleClick}
            key={film.id}
            isActive={activeCard && activeCard.id === film.id}
            film={film}
          />
        )
      )}
    </div>
  );
});

Feed.propTypes = {
  // массив данных с фильмами
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
  // сколько показывать карточек
  limit: PropTypes.number,
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
