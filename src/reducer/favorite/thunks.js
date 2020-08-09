import {ActionCreatorAsync} from './actions';
import {ActionCreator} from "../data/actions";

const Operation = {
  setFavorite: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.setFavoriteRequest());
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.updateFilm(response.data));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.setFavoriteFailure(error));
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.getFavoritesRequest());
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreatorAsync.getFavoritesSuccess(response.data));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.getFavoritesFailure(error));
      });
  },
};

export {
  Operation
};
