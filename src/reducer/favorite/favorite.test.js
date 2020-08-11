import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, Operation, ActionTypeAsync} from "./index";
import {testFilms} from "../../utils/test.utils";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    favorites: [],
    loadingFavoritesData: false,
    loadingSetFavorite: false
  });
});

describe(`Load Favorite`, () => {
  it(`Reducer should update loading  status by load favorites`, () => {
    expect(reducer({
      loadingFavoritesData: false
    }, {
      type: ActionTypeAsync.GET_FAVORITES_REQUEST
    })).toEqual({
      loadingFavoritesData: true
    });
  });

  it(`Reducer should update after successful load favorites`, () => {
    expect(reducer({
      loadingFavoritesData: true,
    }, {
      type: ActionTypeAsync.GET_FAVORITES_SUCCESS,
      payload: testFilms
    })).toEqual({
      loadingFavoritesData: false,
      favorites: testFilms,
    });
  });

  it(`Reducer should update after fail load favorites`, () => {
    expect(reducer({
      loadingFavoritesData: true,
    }, {
      type: ActionTypeAsync.GET_FAVORITES_FAILURE
    })).toEqual({
      favorites: [],
      loadingFavoritesData: false,
    });
  });
});

describe(`Set Favorite`, () => {
  it(`Reducer should update loading  status by load comments`, () => {
    expect(reducer({
      loadingSetFavorite: false
    }, {
      type: ActionTypeAsync.SET_FAVORITE_REQUEST
    })).toEqual({
      loadingSetFavorite: true
    });
  });

  it(`Reducer should update after fail load comments`, () => {
    expect(reducer({
      loadingSetFavorite: true,
    }, {
      type: ActionTypeAsync.SET_FAVORITE_FAILURE
    })).toEqual({
      loadingSetFavorite: false
    });
  });
});


describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
