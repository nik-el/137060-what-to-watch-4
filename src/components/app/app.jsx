import React from 'react';
import {Main} from '../main/main';

const onPromoHandler = () => {};

export const App = (props) => {
  return <Main
    onPromoClick={onPromoHandler}
    {...props}
  />;
};
