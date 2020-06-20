import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Main} from '../main/main';
import {Detailed} from '../detailed/detailed';
import PropTypes from "prop-types";
import {FilmPropTypes} from "../../types/film-prop-types";

const getFilmById = (films, filmId) => {
  return films.find((film) => film.id === filmId);
};

export const App = React.memo(function App(props) {
  const {films} = props;
  const [currentFilmId, setCurrentFilmId] = useState(`1`);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            onCardClick={setCurrentFilmId}
            {...props}
          />;
        </Route>
        <Route path="/detailed">
          <Detailed
            film={getFilmById(films, currentFilmId)}
          />
        </Route>
      </Switch>
    </Router>
  );
});

App.propTypes = {
  // данные с фильмами
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)),
};
