import React from "react";
import PropTypes from 'prop-types';

export const Tabs = React.memo(function Tabs({tabs, active, onTabClick}) {
  const handleTabClick = (event, tab) => {
    event.preventDefault();
    onTabClick(tab);
  };

  const getTabClass = (tab) => {
    return `movie-nav__item` + (tab === active ? ` movie-nav__item--active` : ``);
  };

  return <ul className="movie-nav__list">
    { tabs.map((tab, i) => (
      <li key={tab + i} className={getTabClass(tab)}>
        <a href="#" onClick={(e) => handleTabClick(e, tab)} className="movie-nav__link">{tab}</a>
      </li>
    ))}
  </ul>;
});


Tabs.propTypes = {
  // список табов
  tabs: PropTypes.arrayOf(PropTypes.string),
  // активый таб
  active: PropTypes.string,
  // обработчик клика по табу
  onTabClick: PropTypes.func
};
