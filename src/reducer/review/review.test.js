import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, Operation, ActionTypeAsync} from "./index";
import {testComments} from "../../utils/test.utils";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    comments: [],
    loadingCommentsData: false,
    loadingAddingComment: false
  });
});

describe(`Load comments work correctly`, () => {
  it(`Reducer should update loading  status by load comments`, () => {
    expect(reducer({
      loadingCommentsData: false
    }, {
      type: ActionTypeAsync.GET_COMMENTS_REQUEST
    })).toEqual({
      loadingCommentsData: true
    });
  });

  it(`Reducer should update after successful load comments`, () => {
    expect(reducer({
      loadingCommentsData: true,
    }, {
      type: ActionTypeAsync.GET_COMMENTS_SUCCESS,
      payload: testComments,
    })).toEqual({
      loadingCommentsData: false,
      comments: testComments,
    });
  });

  it(`Reducer should update after fail load films`, () => {
    expect(reducer({
      loadingCommentsData: true,
    }, {
      type: ActionTypeAsync.GET_COMMENTS_FAILURE
    })).toEqual({
      loadingCommentsData: false,
      comments: []
    });
  });
});


describe(`Add comment work correctly`, () => {
  it(`Reducer should update loading  status by load comments`, () => {
    expect(reducer({
      loadingAddingComment: false
    }, {
      type: ActionTypeAsync.ADD_COMMENT_REQUEST
    })).toEqual({
      loadingAddingComment: true
    });
  });

  it(`Reducer should update after successful load comments`, () => {
    expect(reducer({
      loadingAddingComment: true,
    }, {
      type: ActionTypeAsync.ADD_COMMENT_SUCCESS,
      payload: testComments,
    })).toEqual({
      loadingAddingComment: false,
      comments: testComments,
    });
  });

  it(`Reducer should update after fail load comments`, () => {
    expect(reducer({
      loadingAddingComment: true,
    }, {
      type: ActionTypeAsync.ADD_COMMENT_FAILURE
    })).toEqual({
      loadingAddingComment: false
    });
  });

});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadComments();

    apiMock
      .onGet(`/comments:1`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
