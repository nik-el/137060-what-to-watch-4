import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {Main} from '../main/main';
import {Detailed} from '../detailed/detailed';

export const App = React.memo(function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>;
        </Route>
        <Route path="/detailed/:id">
          <Detailed/>
        </Route>
      </Switch>
    </Router>
  );
});
