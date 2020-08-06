import React, {useCallback, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getFilmById} from '../../utils/get-film-by-id.utils';
import {Operation as ReviewOperation} from "../../reducer/review/thunks";
import {getLoadingAddingCommentStatus} from "../../reducer/review/selectors";
import {getUser} from "../../reducer/user/selectors";
import {getRestApi} from "../../reducer/data/selectors";
import PropTypes from "prop-types";
import {Logo} from "../logo/logo";

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

  const formRef = React.createRef();

  const restApi = useSelector(getRestApi);
  const [ratingError, setRatingError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const isAdding = useSelector(getLoadingAddingCommentStatus);
  const userData = useSelector(getUser);

  const avatarUrl = restApi + userData.avatar_url;

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const rating = formData.get(`rating`);
    const comment = formData.get(`review-text`);

    if (!rating) {
      setRatingError(true);
      return;
    }
    if (!comment || comment.length <= MIN_COMMENT || comment.length >= MAX_COMMENT) {
      setCommentError(true);
      return;
    }

    dispatch(ReviewOperation.addComment(id, {rating, comment}));
  }, [id, ratingError, commentError, formRef]);


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
        <Logo />

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
      <form action="#" className="add-review__form"
        ref={formRef}
        onSubmit={handleSubmit}>
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
                    value={value}
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
              The comment length must be between 50 and 400 characters
            </span> }
            <button
              disabled={isAdding}
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
