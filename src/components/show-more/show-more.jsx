import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";

import {ActionCreator} from "../../reducer";

export const ShowMore = React.memo(function ShowMore({offset}) {
  const dispatch = useDispatch();

  const handleShowMoreClick = useCallback(() => {
    dispatch(ActionCreator.setFeedLimit(offset));
  }, [offset]);

  return <div className="catalog__more">
    <button
      onClick={() => handleShowMoreClick()}
      className="catalog__button"
      type="button"
    >
      Show more
    </button>
  </div>;
});

ShowMore.propTypes = {
  // на сколько еще увеличиваем кол-во видимых элементов
  offset: PropTypes.number.isRequired,
};
