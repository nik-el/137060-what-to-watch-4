import React from 'react';
import {Main} from '../main/main';

const handleCardTitleClick = () => {};

export const App = (props) => {
  return <Main
    onCardTitleClick={handleCardTitleClick}
    {...props}
  />;
};
