import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';
import {FilmPropTypes} from "../../types/film-prop-types";

export const Feed = React.memo(function Feed({currentFilms, limit, className}) {
  const [activeCard, setActiveCard] = useState(null);
  const limitFilms = currentFilms.slice(0, limit);

  return (
    <div className={className}>
      { limitFilms.map((film) =>
        (
          <Card
            onCardMouseEnter={setActiveCard}
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
  currentFilms: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
  limit: PropTypes.number,
  className: PropTypes.string
};
