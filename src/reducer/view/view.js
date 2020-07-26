import {extend} from '../../utils/extend.utils';

const FEED_LIMIT = 4;

const initialState = {
  currentGenre: null,
  feedLimit: FEED_LIMIT
};

const ActionType = {
  SET_FILTER: `SET_FILTER`,
  SET_FEED_LIMIT: `SET_FEED_LIMIT`
};

const ActionCreator = {
  setFilter: (filter) => ({
    type: ActionType.SET_FILTER,
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
