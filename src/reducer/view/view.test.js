import {reducer, ActionType} from "./index";

const FEED_LIMIT = 8;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentGenre: null,
    feedLimit: FEED_LIMIT
  });
});

it(`Reducer should update after set  genre`, () => {
  expect(reducer({
    currentGenre: null,
  }, {
    type: ActionType.SET_GENRE,
    payload: `test`
  })).toEqual({
    currentGenre: `test`,
  });
});


it(`Reducer should update after set feed limit`, () => {
  expect(reducer({
    feedLimit: null,
  }, {
    type: ActionType.SET_FEED_LIMIT,
    payload: 10
  })).toEqual({
    feedLimit: 10,
  });
});
