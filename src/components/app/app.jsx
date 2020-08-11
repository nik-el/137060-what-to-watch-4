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
import {getFilms, getFilmsLoadingState, getPromoLoadingState} from "../../reducer/data/selectors";
import {getFilmsByGenre} from "../../utils/get-films-by-genre.utils";
import {getCurrentGenre} from "../../reducer/view/selectors";
import {AddReview} from "../add-review/add-review";
import history from '../../history';
import {FullPlayer} from "../full-player/full-player";
import {MyList} from "../my-list/my-list";
import {PrivateRoute} from "../../private-route/private-route";

export const App = React.memo(function App() {
  const dispatch = useDispatch();
  const isFilmsLoading = useSelector(getFilmsLoadingState);
  const isPromoLoading = useSelector(getPromoLoadingState);

  const films = useSelector(getFilms);
  const currentGenre = useSelector(getCurrentGenre);

  const currentFilms = useMemo(() => getFilmsByGenre(films, currentGenre), [films, currentGenre]);

  useEffect(() => {
    dispatch(DataOperation.loadFilms());
    dispatch(DataOperation.getPromoFilm());
    dispatch(UserOperation.checkAuth());
  }, []);

  if (isFilmsLoading || isPromoLoading) {
    return <div>Загружаемся...</div>;
  } else if (!films.length) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/">
          <Main
            currentFilms={currentFilms}
          />
        </Route>
        <Route path="/films/:id" exact>
          <Detailed
            currentFilms={currentFilms}
          />
        </Route>
        <PrivateRoute
          exact
          path="/films/:id/review"
          render={() => {
            return <AddReview
              currentFilms={currentFilms}
            />;
          }}
        />
        <Route path="/player/:id" exact>
          <FullPlayer
            currentFilms={currentFilms}
          />
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => {
            return <MyList />;
          }}
        />
      </Switch>
    </Router>
  );
});
