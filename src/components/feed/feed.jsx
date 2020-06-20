import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';
import {FilmPropTypes} from "../../types/film-prop-types";

export const Feed = React.memo(function Feed({films, onCardClick, className}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={className}>
      { films.map((film) =>
        (
          <Card
            onCardMouseEnter={setActiveCard}
            onCardClick={onCardClick}
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
  // обработчик клика по заголовку карточки
  onCardClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
