const ActionTypeAsync = {
  GET_FAVORITES_REQUEST: `GET_FAVORITES_REQUEST`,
  GET_FAVORITES_SUCCESS: `GET_FAVORITES_SUCCESS`,
  GET_FAVORITES_FAILURE: `GET_FAVORITES_FAILURE`,
  SET_FAVORITE_REQUEST: `SET_FAVORITE_REQUEST`,
  SET_FAVORITE_SUCCESS: `SET_FAVORITE_SUCCESS`,
  SET_FAVORITE_FAILURE: `SET_FAVORITE_FAILURE`
};

const ActionCreatorAsync = {
  getFavoritesRequest: () => ({
    type: ActionTypeAsync.GET_FAVORITES_REQUEST,
  }),
  getFavoritesSuccess: (favorites) => ({
    type: ActionTypeAsync.GET_FAVORITES_SUCCESS,
    payload: favorites
  }),
  getFavoritesFailure: (error) => ({
    type: ActionTypeAsync.GET_FAVORITES_FAILURE,
    payload: error
  }),
  setFavoriteRequest: () => ({
    type: ActionTypeAsync.SET_FAVORITE_REQUEST,
  }),
  setFavoriteFailure: (error) => ({
    type: ActionTypeAsync.SET_FAVORITE_FAILURE,
    payload: error
  })
};

export {
  ActionTypeAsync,
  ActionCreatorAsync
};
