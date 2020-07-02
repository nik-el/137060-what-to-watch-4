import React from 'react';
import PropTypes from 'prop-types';

import {capitalize} from '../../utils/capitalize.utils';

export const GenresList = React.memo(function GenresList({genres, onGenreClick, currentGenre}) {
  return <ul className="catalog__genres-list">
    {
      [null, ...genres].map((genre, i)=> (
        <li
          key={genre + i}
          className={`catalog__genres-item` + (currentGenre === genre ? ` catalog__genres-item--active` : ``)}
        >
          <a
            onClick={(event)=> {
              event.preventDefault();
              onGenreClick(genre);
            }}
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
