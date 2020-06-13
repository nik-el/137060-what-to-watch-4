import React from 'react';
import {Main} from '../main/main';

const onCardTitleHandler = () => {};

export const App = (props) => {
  return <Main
    onCardTitleClick={onCardTitleHandler}
    {...props}
  />;
};
