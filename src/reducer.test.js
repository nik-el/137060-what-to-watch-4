import {reducer, ActionType} from "./reducer.js";
// import {testFilms, testGenres} from './utils/test.utils';
// import {films} from "./mocks/films";

// it(`Reducer without additional parameters should return initial state`, () => {
//   expect(reducer(undefined, {})).toEqual({
//     films: testFilms,
//     currentGenre: null,
//     genres: [`Comedy`],
//   });
// });

it(`Reducer should return new state with current genre`, () => {
  expect(reducer({
    currentGenre: null
  }, {
    type: ActionType.SET_FILTER,
    payload: `test genre`,
  })).toEqual({
    currentGenre: `test genre`,
  });
});

// it(`Reducer should return new state with current genre`, () => {
//   expect(reducer({
//     films: testFilms,
//   }, {
//     type: ActionType.GET_FILMS_BY_GENRE,
//     payload: `test genre 1`,
//   })).toEqual({
//     films: [testFilms[0]],
//   });
// });
