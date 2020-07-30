import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {capitalize} from '../../utils/capitalize.utils';
import {ActionCreator} from '../../reducer/view/actions';
import {getGenres} from '../../reducer/data/selectors';
import {getCurrentGenre} from '../../reducer/view/selectors';

const DEFAULT_GENRE = null;

export const GenresList = React.memo(function GenresList() {
  const dispatch = useDispatch();

  const handleGenreClick = (event, genre) => {
    event.preventDefault();
    dispatch(ActionCreator.setGenre(genre));
  };

  const currentGenre = useSelector(getCurrentGenre);
  const genres = useSelector(getGenres);

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
