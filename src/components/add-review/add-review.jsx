import React, {useCallback, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {getFilmById} from '../../utils/get-film-by-id.utils';
import {Operation as ReviewOperation} from "../../reducer/review/thunks";
import {getLoadingAddingCommentStatus} from "../../reducer/review/selectors";
import {getUser} from "../../reducer/user/selectors";
import PropTypes from "prop-types";
import {Logo} from "../logo/logo";
import {Rating} from "../rating/rating";
import {TextReview} from "../text-review/text-review";
import {UserBlock} from "../user-block/user-block";

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

  const [ratingError, setRatingError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const isAdding = useSelector(getLoadingAddingCommentStatus);
  const userData = useSelector(getUser);

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
              <Link
                to={`/detailed/${currentFilm.id}`}
                className="breadcrumbs__link"
              >
                {currentFilm.title}
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>

        <UserBlock
          userData={userData}
        />
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
        <Rating />
        <TextReview />

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
      </form>
    </div>

  </section>;

});

AddReview.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.object)
};
