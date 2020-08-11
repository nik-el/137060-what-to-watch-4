import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Feed} from '../feed/feed';
import {UserBlock} from '../user-block/user-block';
import {GenresList} from '../genres-list/genres-list';
import {ShowMore} from '../show-more/show-more';
import {
  getFilms,
  getPromoId
} from "../../reducer/data/selectors";
import {getUser} from "../../reducer/user/selectors";
import {getFeedLimit} from "../../reducer/view/selectors";
import PropTypes from "prop-types";
import {Logo} from "../logo/logo";
import {FavoriteButton} from "../favorite-button/favorite-button";
import {Link} from "react-router-dom";
import {FilmPropTypes} from "../../types/film-prop-types";
import {ActionCreator as ViewActionCreator} from "../../reducer/view";

const DEFAULT_LIMIT = 8;

export const Main = ({currentFilms}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewActionCreator.setGenre(null));
  }, []);

  const userData = useSelector(getUser);
  const promoId = useSelector(getPromoId) || 0;

  const films = useSelector(getFilms);
  const feedLimit = useSelector(getFeedLimit || DEFAULT_LIMIT);

  const promoItem = films.find((item) => item.id === promoId) || films[0];
  const canShowMore = feedLimit < currentFilms.length;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoItem.bgImage} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />

        <UserBlock
          userData={userData}
        />

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
              <Link
                to={`/player/${promoItem.id}`}
                className="btn btn--play movie-card__button" type="button"
                style={{
                  WebkitAppearance: `none`
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              <FavoriteButton
                id={promoItem.id}
                isFavorite={promoItem.isFavorite}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <Feed
          className="catalog__movies-list"
          currentFilms={currentFilms}
          limit={feedLimit}
        />

        { canShowMore && <ShowMore
          offset={feedLimit}
        /> }
      </section>

      <footer className="page-footer">

        <Logo
          alignRight
        />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

Main.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
};
