import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';

import {films} from './mocks/films';

const data = {
  promoItem: {
    title: `The Grand Budapest Hotel`,
    year: 2014,
    genre: `Comedy`
  }
};

const init = () => {
  ReactDOM.render(
      <App
        films={films}
        {...data}
      />,
      document.querySelector(`#root`)
  );
};

init();
