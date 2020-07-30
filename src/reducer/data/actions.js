const getGenresFromFilms = (films) => {
  const genres = new Set();
  films.forEach((film) => genres.add(film.genre));
  return [...genres];
};

const ActionType = {
  SET_GENRES: `SET_GENRES`,
};
const ActionCreator = {
  setGenres: (films) => ({
    type: ActionType.SET_GENRES,
    payload: getGenresFromFilms(films)
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

export {
  ActionType,
  ActionTypeAsync,
  ActionCreator,
  ActionCreatorAsync
};
