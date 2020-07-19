import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card';
import {useSelector} from "react-redux";

export const Feed = React.memo(function Feed({limit, className}) {
  const films = useSelector((state) => state.films);
  const [activeCard, setActiveCard] = useState(null);

  const limitFilms = films.slice(0, limit);

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
  // сколько показывать карточек
  limit: PropTypes.number,
  className: PropTypes.string
};
