import {ActionCreatorAsync} from './actions';

const Operation = {
  addComment: (id, review) => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.addCommentRequest());
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        dispatch(ActionCreatorAsync.addCommentSuccess(response.data));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.addCommentFailure(error));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.getCommentsRequest());
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreatorAsync.getCommentsSuccess(response.data));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.getCommentsFailure(error));
      });
  },
};

export {
  Operation
};
