import React, {useEffect, useMemo} from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import {Main} from '../main/main';
import {SignIn} from '../sign-in/sign-in';
import {Detailed} from '../detailed/detailed';
import {useDispatch, useSelector} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data";
import {Operation as UserOperation} from "../../reducer/user";
import {getFilms} from "../../reducer/data/selectors";
import {getFilmsByGenre} from "../../utils/get-films-by-genre.utils";
import {getCurrentGenre} from "../../reducer/view/selectors";
import {AddReview} from "../add-review/add-review";
import history from '../../history';
import {FullPlayer} from "../full-player/full-player";
import {MyList} from "../my-list/my-list";
import {PrivateRoute} from "../../private-route/private-route";

export const App = React.memo(function App() {
  const dispatch = useDispatch();

  const films = useSelector(getFilms);
  const currentGenre = useSelector(getCurrentGenre);

  const currentFilms = useMemo(() => getFilmsByGenre(films, currentGenre), [films, currentGenre]);

  useEffect(() => {
    dispatch(DataOperation.loadFilms());
    dispatch(DataOperation.getPromoFilm());
    dispatch(UserOperation.checkAuth());
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/sign-page">
          <SignIn/>
        </Route>
        <Route exact path="/">
          <Main
            currentFilms={currentFilms}
          />
        </Route>
        <Route path="/detailed/:id">
          <Detailed
            currentFilms={currentFilms}
          />
        </Route>
        <PrivateRoute
          exact
          path="/review/:id"
          render={() => {
            return <AddReview
              currentFilms={currentFilms}
            />;
          }}
        />
        <Route path="/player/:id">
          <FullPlayer
            currentFilms={currentFilms}
          />
        </Route>
        <PrivateRoute
          exact
          path="/my-list"
          render={() => {
            return <MyList />;
          }}
        />
      </Switch>
    </Router>
  );
});
