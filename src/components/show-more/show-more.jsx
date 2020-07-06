import React from 'react';
import PropTypes from 'prop-types';

export const ShowMore = React.memo(function ShowMore({offset, onShowMoreClick}) {
  return <div className="catalog__more">
    <button
      onClick={() => onShowMoreClick(offset)}
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
  // обработчик клика по кнопку
  onShowMoreClick: PropTypes.func.isRequired
};
