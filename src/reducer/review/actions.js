const ActionTypeAsync = {
  GET_COMMENTS_REQUEST: `GET_COMMENTS_REQUEST`,
  GET_COMMENTS_SUCCESS: `GET_COMMENTS_SUCCESS`,
  GET_COMMENTS_FAILURE: `GET_COMMENTS_FAILURE`,
  ADD_COMMENT_REQUEST: `ADD_COMMENT_REQUEST`,
  ADD_COMMENT_SUCCESS: `ADD_COMMENT_SUCCESS`,
  ADD_COMMENT_FAILURE: `ADD_COMMENT_FAILURE`
};

const ActionCreatorAsync = {
  getCommentsRequest: () => ({
    type: ActionTypeAsync.GET_COMMENTS_REQUEST,
  }),
  getCommentsSuccess: (comments) => ({
    type: ActionTypeAsync.GET_COMMENTS_SUCCESS,
    payload: comments
  }),
  getCommentsFailure: (error) => ({
    type: ActionTypeAsync.GET_COMMENTS_FAILURE,
    payload: error
  }),
  addCommentRequest: () => ({
    type: ActionTypeAsync.ADD_COMMENT_REQUEST,
  }),
  addCommentSuccess: (comments) => ({
    type: ActionTypeAsync.ADD_COMMENT_SUCCESS,
    payload: comments
  }),
  addCommentFailure: (error) => ({
    type: ActionTypeAsync.ADD_COMMENT_FAILURE,
    payload: error
  })
};

export {
  ActionTypeAsync,
  ActionCreatorAsync
};
