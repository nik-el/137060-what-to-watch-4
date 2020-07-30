const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_FEED_LIMIT: `SET_FEED_LIMIT`
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre
  }),
  setFeedLimit: (limit) => ({
    type: ActionType.SET_FEED_LIMIT,
    payload: limit
  })
};

export {
  ActionType,
  ActionCreator
};
