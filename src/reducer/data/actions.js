import {filmAdapter} from "../../adapters/films";

const getGenresFromFilms = (films) => {
  const genres = new Set();
  films.forEach((film) => genres.add(film.genre));
  return [...genres];
};

const ActionType = {
  UPDATE_FILM: `UPDATE_FILM`
};

const ActionCreator = {
  updateFilm: (film) => ({
    type: ActionType.UPDATE_FILM,
    payload: filmAdapter(film)
  })
};

const ActionTypeAsync = {
  FILMS_REQUEST: `FILMS_REQUEST`,
  FILMS_SUCCESS: `FILMS_SUCCESS`,
  FILMS_FAILURE: `FILMS_FAILURE`,
  PROMO_REQUEST: `PROMO_REQUEST`,
  PROMO_SUCCESS: `PROMO_SUCCESS`,
  PROMO_FAILURE: `PROMO_FAILURE`,
};
const ActionCreatorAsync = {
  filmsRequest: () => ({
    type: ActionTypeAsync.FILMS_REQUEST,
  }),
  filmsSuccess: (films) => ({
    type: ActionTypeAsync.FILMS_SUCCESS,
    payload: {
      films,
      genres: getGenresFromFilms(films)
    }
  }),
  filmsFailure: (error) => ({
    type: ActionTypeAsync.FILMS_FAILURE,
    payload: error
  }),
  promoRequest: () => ({
    type: ActionTypeAsync.PROMO_REQUEST,
  }),
  promoSuccess: (film) => ({
    type: ActionTypeAsync.PROMO_SUCCESS,
    payload: film.id
  }),
  promoFailure: (error) => ({
    type: ActionTypeAsync.PROMO_FAILURE,
    payload: error
  })
};

export {
  ActionType,
  ActionCreator,
  ActionTypeAsync,
  ActionCreatorAsync
};
