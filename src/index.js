import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  promoItem: {
    title: `The Grand Budapest Hotel`,
    year: 2014,
    genre: `Comedy`
  },
  feedItems: [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Terminator`,
    `Terminator 2`,
    `Terminator 3`
  ]
};

const init = () => {
  ReactDOM.render(
      <App
        {...data}
      />,
      document.querySelector(`#root`)
  );
};

init();
