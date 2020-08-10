import {extend} from "../../utils/extend.utils";
import {ActionType} from './actions';

const FEED_LIMIT = 8;

const initialState = {
  currentGenre: null,
  feedLimit: FEED_LIMIT
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      const currentGenre = action.payload;
      return extend(state, {
        currentGenre,
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
