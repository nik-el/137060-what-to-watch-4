import React, {useCallback, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getFilmById} from '../../utils/get-film-by-id.utils';
import {Operation as ReviewOperation} from "../../reducer/review/thunks";
import {getLoadingAddingCommentStatus} from "../../reducer/review/selectors";
import {getUser} from "../../reducer/user/selectors";
import {getRestApi} from "../../reducer/data/selectors";
import PropTypes from "prop-types";

const RATING_VALUES = [1, 2, 3, 4, 5];
const MIN_COMMENT = 50;
const MAX_COMMENT = 400;

const warningMsgStyle = {
  color: `red`,
  fontSize: `10px`,
  marginRight: `4px`
};

export const AddReview = React.memo(function AddReview({currentFilms}) {
  const dispatch = useDispatch();

  const {id} = useParams();
  const currentFilm = getFilmById(currentFilms, id);

  const restApi = useSelector(getRestApi);
  const [rating, setRating] = useState(null);
  const [ratingError, setRatingError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [comment, setComment] = useState(``);
  const isAdding = useSelector(getLoadingAddingCommentStatus);
  const userData = useSelector(getUser);

  const avatarUrl = restApi + userData.avatar_url;

  const handleRatingChange = useCallback((value) => {
    setRating(value);
    setRatingError(false);
  }, []);

  const handleCommentChange = useCallback((value) => {
    if (value && value.length >= MIN_COMMENT && value.length <= MAX_COMMENT) {
      setCommentError(false);
    }
    setComment(value);
  }, []);

  const handlePostClick = useCallback((event) => {
    event.preventDefault();
    if (!rating) {
      setRatingError(true);
      return;
    }
    if (!comment || comment.length <= MIN_COMMENT || comment.length >= MAX_COMMENT) {
      setCommentError(true);
      return;
    }


    dispatch(ReviewOperation.addComment(id, {rating, comment}));
  }, [id, rating, comment, ratingError, commentError]);


  return <section
    className="movie-card movie-card--full"
    style={{'backgroundColor': currentFilm.bgColor}}
  >
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={currentFilm.bgImage} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={currentFilm.poster} alt="The Grand Budapest Hotel poster" width="218"
          height="327"/>
      </div>
    </div>

    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              RATING_VALUES.map((value) => (
                <React.Fragment key={value}>
                  <input
                    className="rating__input"
                    key={value}
                    id={`star-` + value} type="radio"
                    name="rating"
                    checked={rating === value}
                    onChange={() => handleRatingChange(value)}
                    value={value}
                    disabled={isAdding}
                  />
                  <label className="rating__label" htmlFor={`star-` + value}>
                    Rating {value}
                  </label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div
          className="add-review__text"
          style={{'backgroundColor': currentFilm.bgColor}}
        >
          <textarea
            onChange={(e) => handleCommentChange(e.target.value)}
            disabled={isAdding}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            { ratingError && <span style={warningMsgStyle}>
              Put a rating
            </span> }
            { commentError && <span style={warningMsgStyle}>
              The comment length must be between 50 and 400 characters (current: {comment.length})
            </span> }
            <button
              disabled={isAdding}
              onClick={(e)=> {
                handlePostClick(e);
              }}
              className="add-review__btn"
              type="submit">
              Post
            </button>
          </div>

        </div>
      </form>
    </div>

  </section>;

});

AddReview.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.object)
};
