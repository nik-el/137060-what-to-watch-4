import React from 'react';
import PropTypes from 'prop-types';

import {capitalize} from '../../utils/capitalize.utils';

const DEFAULT_GENRE = null;

export const GenresList = React.memo(function GenresList({genres, onGenreClick, currentGenre}) {
  const handleGenreClick = (event, genre) => {
    event.preventDefault();
    onGenreClick(genre);
  };

  const getGenreClass = (genre) => (
    `catalog__genres-item` + (currentGenre === genre ? ` catalog__genres-item--active` : ``)
  );

  return <ul className="catalog__genres-list">
    {
      [DEFAULT_GENRE, ...genres].map((genre, i)=> (
        <li
          key={genre + i}
          className={getGenreClass(genre)}
        >
          <a
            onClick={(e) => handleGenreClick(e, genre)}
            href="#"
            className="catalog__genres-link">{!genre ? `All genres` : capitalize(genre)}</a>
        </li>
      ))
    }
  </ul>;
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  currentGenre: PropTypes.string,
  onGenreClick: PropTypes.func
};
