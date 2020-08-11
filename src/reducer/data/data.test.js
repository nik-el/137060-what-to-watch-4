import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, Operation, ActionTypeAsync} from "./index";
import {testEditedFilm, testFilm, testFilms, testGenres} from "../../utils/test.utils";
import {ActionType} from "./actions";

const api = createAPI(() => {});

const REST_API = `https://4.react.pages.academy`;


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    restApi: REST_API,
    films: [],
    loadingFilmsData: false,
    loadingPromoData: false,
    promoId: null,
    genres: []
  });
});

describe(`Load Promo`, () => {
  it(`Reducer should update loading  status by load promo`, () => {
    expect(reducer({
      loadingPromoData: false
    }, {
      type: ActionTypeAsync.PROMO_REQUEST
    })).toEqual({
      loadingPromoData: true
    });
  });

  it(`Reducer should update after successful load films`, () => {
    expect(reducer({
      loadingPromoData: true,
    }, {
      type: ActionTypeAsync.PROMO_SUCCESS,
      payload: testFilm.id
    })).toEqual({
      loadingPromoData: false,
      promoId: testFilm.id,
    });
  });

  it(`Reducer should update after fail load films`, () => {
    expect(reducer({
      loadingPromoData: true,
    }, {
      type: ActionTypeAsync.PROMO_FAILURE
    })).toEqual({
      loadingPromoData: false,
      promoId: null,
    });
  });
});


describe(`Load Films`, () => {
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
});


it(`Reducer should update after update film`, () => {
  expect(reducer({
    films: [testFilms[0]]
  }, {
    type: ActionType.UPDATE_FILM,
    payload: testEditedFilm,
  })).toEqual({
    films: [testEditedFilm],
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
