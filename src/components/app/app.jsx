import React from 'react';
import Main from '../main/main';

// eslint-disable-next-line react/prop-types
const App = ({promoItem}) => {
  return <Main
    {...promoItem}
  />;
};

export default App;
