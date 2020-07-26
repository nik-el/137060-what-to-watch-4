import {extend} from '../../utils/extend.utils';
import {filmAdapter} from '../../adapters/films';

const getGenres = (filmItems) => {
  const genres = new Set();
  filmItems.forEach((film) => genres.add(film.genre));
  return [...genres];
};

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

const initialState = {
  films: [],
  loadingFilmsData: false,
  genres: [],
};

const ActionType = {
  SET_GENRES: `SET_GENRES`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};
const ActionCreator = {
  getFilmsByGenre: (filter) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: filter
  }),
  setGenres: (films) => ({
    type: ActionType.SET_GENRES,
    payload: getGenres(films)
  })
};

const ActionTypeAsync = {
  FILMS_REQUEST: `FILMS_REQUEST`,
  FILMS_SUCCESS: `FILMS_SUCCESS`,
  FILMS_FAILURE: `FILMS_FAILURE`,
};
const ActionCreatorAsync = {
  filmsRequest: () => ({
    type: ActionTypeAsync.FILMS_REQUEST,
  }),
  filmsSuccess: (films) => ({
    type: ActionTypeAsync.FILMS_SUCCESS,
    payload: films
  }),
  filmsFailure: (error) => ({
    type: ActionTypeAsync.FILMS_FAILURE,
    payload: error
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeAsync.FILMS_REQUEST:
      return extend(state, {
        loadingFilmsData: true,
      });
    case ActionTypeAsync.FILMS_SUCCESS:
      const films = action.payload;
      return extend(state, {
        films,
        loadingFilmsData: false
      });
    case ActionTypeAsync.FILMS_FAILURE:
      return extend(state, {
        films: [],
        loadingFilmsData: false
      });
    case ActionType.GET_FILMS_BY_GENRE:
      const currentGenre = action.payload;

      if (!currentGenre) {
        return state;
      }

      return extend(state, {
        films: state.films.filter((item) => item.genre === currentGenre),
      });
    case ActionType.SET_GENRES:
      const genres = action.payload;
      return extend(state, {
        genres,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
