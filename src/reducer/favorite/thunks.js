import {ActionCreatorAsync} from './actions';
import {ActionCreator} from "../data/actions";
import {filmAdapter} from "../../adapters/films";

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
        const adaptedFilms = response.data.map((item) => filmAdapter(item));
        dispatch(ActionCreatorAsync.getFavoritesSuccess(adaptedFilms));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.getFavoritesFailure(error));
      });
  },
};

export {
  Operation
};
