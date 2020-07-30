import {ActionCreator, ActionCreatorAsync} from './actions';
import {filmAdapter} from '../../adapters/films';

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreatorAsync.filmsRequest());
    return api.get(`/films`)
      .then((response) => {
        const adaptedFilms = response.data.map((item) => filmAdapter(item));
        dispatch(ActionCreatorAsync.filmsSuccess(adaptedFilms));
        dispatch(ActionCreator.setGenres(adaptedFilms));
      }).catch(function (error) {
        dispatch(ActionCreatorAsync.filmsFailure(error));
      });
  },
};

export {
  Operation
};
