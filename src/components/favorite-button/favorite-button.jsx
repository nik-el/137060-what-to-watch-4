import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {Operation as FavoriteOperation} from "../../reducer/favorite";
import {useDispatch} from "react-redux";

const FAVORITE_STATUS = {
  'ADD_FAVORITE': 1,
  'DELETE_FAVORITE': 0,
};

export const FavoriteButton = React.memo(function FavoriteButton({id, isFavorite}) {
  const dispatch = useDispatch();
  const newStatus = isFavorite ? FAVORITE_STATUS.DELETE_FAVORITE : FAVORITE_STATUS.ADD_FAVORITE;

  const handleFavoriteClick = useCallback(() => {
    dispatch(FavoriteOperation.setFavorite(id, newStatus));
  }, [isFavorite, id]);

  return <button
    className="btn btn--list movie-card__button"
    type="button"
    onClick={handleFavoriteClick}
  >
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
    </svg>
    <span>My list</span>
  </button>;
});

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool
};
