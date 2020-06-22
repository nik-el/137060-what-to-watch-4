import React from 'react';
import PropTypes from 'prop-types';
import {FilmPropTypes} from "../../types/film-prop-types";
import {useParams} from 'react-router-dom';

export const Detailed = React.memo(function Detailed({films}) {
  const {id} = useParams();

  console.log('idididid:', id);
  const film = films.find((item) => item.id === id);
  const {
    title,
    genre,
    releaseYear,
    thumbnail,
    poster,
    description,
    rating,
    ratingCount,
    directors,
    starring
  } = film;

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={thumbnail} alt="The Grand Budapest Hotel"/>
      </div>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseYear}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img
            src={poster}
            alt={title} width="218"
            height="327"/>
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item movie-nav__item--active">
                <a href="#" className="movie-nav__link">Overview</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          <div className="movie-rating">
            <div className="movie-rating__score">{rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">{ratingCount} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{description}</p>
            <p className="movie-card__director"><strong>Director: {directors[0]}</strong></p>
            <p className="movie-card__starring"><strong>Starring: {starring[0]}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>;
});

Detailed.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
};
