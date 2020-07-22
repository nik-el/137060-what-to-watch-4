import {films} from './mocks/films';
import {extend} from './utils/extend.utils';

const getGenres = (filmItems) => {
  const genres = new Set();
  filmItems.forEach((film) => genres.add(film.genre));
  return [...genres];
};

const FEED_LIMIT = 4;

const initialState = {
  films,
  currentGenre: null,
  genres: getGenres(films),
  feedLimit: FEED_LIMIT
};

const ActionType = {
  SET_FILTER: `SET_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SET_FEED_LIMIT: `SET_FEED_LIMIT`
};

const ActionCreator = {
  setFilter: (filter) => ({
    type: ActionType.SET_FILTER,
    payload: filter
  }),
  getFilmsByGenre: (filter) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: filter
  }),
  setFeedLimit: (limit) => ({
    type: ActionType.SET_FEED_LIMIT,
    payload: limit
  })

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER:
      const currentFilter = action.payload;
      return extend(state, {
        currentGenre: currentFilter,
      });
    case ActionType.GET_FILMS_BY_GENRE:
      const currentGenre = action.payload;

      if (!currentGenre) {
        return extend(state, {
          films
        });
      }

      return extend(state, {
        films: films.filter((item)=>item.genre === currentGenre),
      });
    case ActionType.SET_FEED_LIMIT:
      const offset = action.payload;

      return extend(state, {
        feedLimit: state.feedLimit + offset,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
