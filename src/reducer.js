import {films} from './mocks/films';
import {extend} from './utils/extend.utils';

const initialState = {
  films,
  genreFilter: null
};

const ActionType = {
  SET_FILTER: `SET_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`

};

const ActionCreator = {
  setFilter: (payload) => ({
    type: ActionType.SET_FILTER,
    payload
  }),
  getFilmsByGenre: (payload) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER:
      const currentFilter = action.payload;
      return extend(state, {
        genreFilter: currentFilter,
      });
    case ActionType.GET_FILMS_BY_GENRE:
      const currentGenre = action.payload;
      const filmByGenre = state.films.filter((item)=>(
        item.genre = currentGenre
      ));
      return extend(state, {
        films: filmByGenre,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
