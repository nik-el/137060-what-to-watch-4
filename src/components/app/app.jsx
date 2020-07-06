import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {Main} from '../main/main';
import {Detailed} from '../detailed/detailed';
import PropTypes from "prop-types";
import {FilmPropTypes} from '../../types/film-prop-types';
import {ActionCreator} from '../../reducer';

const App = React.memo(function App(props) {
  const {
    films,
    handleGenreClick,
    handleCardTitleClick,
    onShowMoreClick
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            onCardTitleClick={handleCardTitleClick}
            onGenreClick={handleGenreClick}
            onShowMoreClick={onShowMoreClick}
            promoItem={films[0]}
            {...props}
          />;
        </Route>
        <Route path="/detailed/:id">
          <Detailed
            films={films}
            onCardTitleClick={handleCardTitleClick}
          />
        </Route>
      </Switch>
    </Router>
  );
});

const mapStateToProps = (state) => ({
  films: state.films,
  genres: state.genres,
  currentGenre: state.currentGenre,
  feedLimit: state.feedLimit
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreClick(genre) {
    dispatch(ActionCreator.setFilter(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  },
  handleCardTitleClick(film) {
    dispatch(ActionCreator.setFilter(film.genre));
    dispatch(ActionCreator.getFilmsByGenre(film.genre));
  },
  onShowMoreClick(offset) {
    dispatch(ActionCreator.setFeedLimit(offset));
  }
});


App.propTypes = {
  // данные с фильмами
  films: PropTypes.arrayOf(PropTypes.shape(FilmPropTypes)).isRequired,
  // обработчик клика по жанру
  handleGenreClick: PropTypes.func,
  // обработчик клика по заголовку карточки
  handleCardTitleClick: PropTypes.func,
  // обработчик клика по кнопке Показать больше
  onShowMoreClick: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
