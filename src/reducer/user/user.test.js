import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, Operation, ActionType} from "./index";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    user: null
  });
});

it(`Reducer should update after auth`, () => {
  expect(reducer({
    authorizationStatus: `NO_AUTH`,
    user: null
  }, {
    type: ActionType.SET_AUTH
  })).toEqual({
    authorizationStatus: `NO_AUTH`,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
