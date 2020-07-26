import React from 'react';
import {useSelector} from "react-redux";
import {Feed} from '../feed/feed';
import {GenresList} from '../genres-list/genres-list';
import {ShowMore} from '../show-more/show-more';
import {getFilms, getFilmsLoadingState} from "../../reducer/data/selectors";
import {getFeedLimit} from "../../reducer/view/selectors";

const DEFAULT_LIMIT = 8;

export const Main = () => {
  const isFilmsLoading = useSelector(getFilmsLoadingState);
  const films = useSelector(getFilms);
  const promoItem = films[0];
  const feedLimit = useSelector(getFeedLimit || DEFAULT_LIMIT);

  const canShowMore = feedLimit < films.length;


  if (isFilmsLoading) {
    return <div>Загружаемся...</div>;
  } else if (!films.length) {
    return <div>Нет данных для отображения</div>;
  }

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoItem.thumbnail} alt="The Grand Budapest Hotel"/>
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
            <img src={promoItem.poster}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">
              {promoItem.title}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoItem.genre}</span>
              <span className="movie-card__year">{promoItem.releaseYear}</span>
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
        />

        <Feed
          className="catalog__movies-list"
          limit={feedLimit}
        />

        { canShowMore && <ShowMore
          offset={feedLimit}
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
