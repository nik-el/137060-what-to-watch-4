import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from "./reducer/reducer";
import {App} from './components/app/app';
import {createAPI} from './api';

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
