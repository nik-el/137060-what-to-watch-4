import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {Main} from '../main/main';
import {Detailed} from '../detailed/detailed';
import PropTypes from "prop-types";
import {FilmPropTypes} from "../../types/film-prop-types";

export const App = React.memo(function App(props) {
  const {films} = props;
  const handleCardTitleClick = () => {};

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            onCardTitleClick={handleCardTitleClick}
            {...props}
          />;
        </Route>
        <Route path="/detailed/:id">
          <Detailed
            films={films}
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
