import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, Operation, ActionTypeAsync} from "./index";
import {testFilms, testGenres} from "../../utils/test.utils";

const api = createAPI(() => {});

const REST_API = `https://4.react.pages.academy`;


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    restApi: REST_API,
    films: [],
    loadingFilmsData: false,
    genres: [],
  });
});

it(`Reducer should update loading  status by load films`, () => {
  expect(reducer({
    loadingFilmsData: false
  }, {
    type: ActionTypeAsync.FILMS_REQUEST
  })).toEqual({
    loadingFilmsData: true
  });
});

it(`Reducer should update after successful load films`, () => {
  expect(reducer({
    loadingFilmsData: true,
  }, {
    type: ActionTypeAsync.FILMS_SUCCESS,
    payload: {
      films: testFilms,
      genres: testGenres
    },
  })).toEqual({
    loadingFilmsData: false,
    films: testFilms,
    genres: testGenres
  });
});

it(`Reducer should update after fail load films`, () => {
  expect(reducer({
    loadingFilmsData: true,
  }, {
    type: ActionTypeAsync.FILMS_FAILURE
  })).toEqual({
    loadingFilmsData: false,
    films: [],
    genres: []
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
