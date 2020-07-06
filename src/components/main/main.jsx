import React from 'react';
import PropTypes from 'prop-types';
import {Feed} from '../feed/feed';
import {GenresList} from '../genres-list/genres-list';
import {ShowMore} from '../show-more/show-more';

import {FilmPropTypes} from '../../types/film-prop-types';

export const Main = ({promoItem, onCardTitleClick, films, genres, onGenreClick, currentGenre, onShowMoreClick, feedLimit}) => {
  const {title, genre, releaseYear, poster, thumbnail} = promoItem;

  const canShowMore = feedLimit < films.length;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={thumbnail} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">
              {title}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          films={films}
          genres={genres}
          currentGenre={currentGenre}
          onGenreClick={onGenreClick}
        />

        <Feed
          films={films}
          onCardTitleClick={onCardTitleClick}
          className="catalog__movies-list"
          limit={feedLimit}
        />

        { canShowMore && <ShowMore
          offset={feedLimit}
          onShowMoreClick={onShowMoreClick}
        /> }
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

Main.propTypes = {
  // массив данных с фильмами
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
  // список доступных жанров
  genres: PropTypes.arrayOf(PropTypes.string),
  // промо документ
  promoItem: PropTypes.shape(FilmPropTypes).isRequired,
  // обработчик клика по заголовку карточки
  onCardTitleClick: PropTypes.func.isRequired,
  // Обработчик клика по жанру
  onGenreClick: PropTypes.func.isRequired,
  // текущий выбранный жанр
  currentGenre: PropTypes.string,
  // обработчик клика по кнопки Показать больше
  onShowMoreClick: PropTypes.func.isRequired,
  // общее кол-во показанных фильмов
  feedLimit: PropTypes.number
};
