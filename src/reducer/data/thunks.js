import {ActionCreatorAsync} from './actions';
import {filmAdapter} from '../../adapters/films';

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.filmsRequest());
    return api.get(`/films`)
      .then((response) => {
        const adaptedFilms = response.data.map((item) => filmAdapter(item));
        dispatch(ActionCreatorAsync.filmsSuccess(adaptedFilms));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.filmsFailure(error));
      });
  },
  getPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.promoRequest());
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreatorAsync.promoSuccess(response.data));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.promoFailure(error));
      });
  },
};

export {
  Operation
};
