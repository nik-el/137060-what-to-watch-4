import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {capitalize} from '../../utils/capitalize.utils';
import {ActionCreator} from "../../reducer";

const DEFAULT_GENRE = null;

export const GenresList = React.memo(function GenresList() {
  const dispatch = useDispatch();

  const handleGenreClick = (event, genre) => {
    event.preventDefault();
    dispatch(ActionCreator.setFilter(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  };

  const currentGenre = useSelector((state) => state.currentGenre);
  const genres = useSelector((state) => state.genres);

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
