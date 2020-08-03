import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Tabs} from '../tabs/tabs';
import {Feed} from "../feed/feed";
import PropTypes from "prop-types";
import {Operation as ReviewOperation} from "../../reducer/review";
import {getComments} from "../../reducer/review/selectors";
import {getFormattedDate} from '../../utils/date.utils';
import {getRating} from "../../utils/get-rating.utils";
import {getDuration} from "../../utils/get-duration.utils";
import {getEvenArray, getOddArray} from "../../utils/parity.utils";

const DETAILED_TABS = [`Overview`, `Details`, `Reviews`];

export const Detailed = React.memo(function Detailed({currentFilms}) {
  const {id} = useParams();
  const [currentTab, setActiveTab] = useState(DETAILED_TABS[0]);
  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  let currentFilm = currentFilms[0];

  useEffect(() => {
    dispatch(ReviewOperation.loadComments(id));
  }, []);

  const filteredFilms = currentFilms.filter((item) => {
    if (item.id === id) {
      currentFilm = item;
      return false;
    }
    return true;
  });

  const {
    title,
    genre,
    releaseYear,
    poster,
    description,
    rating,
    ratingCount,
    director,
    starring,
    bgImage,
    bgColor,
    runTime
  } = currentFilm;

  const getInfoElByTab = (tab) => {
    switch (tab) {
      case `Overview`:
        return overviewEl();
      case `Details`:
        return detailsEl();
      case `Reviews`:
        return reviewsEl();
      default:
        return overviewEl();
    }
  };

  const overviewEl = () => (<>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{getRating(rating)}</span>
            <span className="movie-rating__count">{ratingCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>
          <p className="movie-card__director"><strong>Director: {director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
        </div>
  </>);

  const detailsEl = () => (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.join(`, `)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDuration(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );

  const reviewsEl = () => (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          getOddArray(comments).map((item) => {
            return <div
              key={item.id}
              className="review"
            >
              <blockquote className="review__quote">
                <p className="review__text">{item.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{item.user.name}</cite>
                  <time className="review__date" dateTime={item.date}>{getFormattedDate(item.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{item.rating}</div>
            </div>;
          })
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          getEvenArray(comments).map((item) => {
            return <div
              key={item.id}
              className="review"
            >
              <blockquote className="review__quote">
                <p className="review__text">{item.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{item.user.name}</cite>
                  <time className="review__date" dateTime={item.date}>{getFormattedDate(item.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{item.rating}</div>
            </div>;
          })
        }
      </div>
    </div>
  );

  return <>
    <section
      className="movie-card movie-card--full"
      style={{'backgroundColor': bgColor}}
    >
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={bgImage} alt="The Grand Budapest Hotel"/>
        </div>
`
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
              <Link className="btn movie-card__button" to={`/review/${currentFilm.id}`}>
                Add review
              </Link>
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
              <Tabs
                tabs={DETAILED_TABS}
                active={currentTab}
                onTabClick={setActiveTab}
              />
            </nav>

            {getInfoElByTab(currentTab)}

          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <Feed
          currentFilms={filteredFilms}
          className="catalog__movies-list"
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
});


Detailed.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.object),
};
