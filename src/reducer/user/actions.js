const ActionType = {
  SET_AUTH: `SET_AUTH`
};

const ActionCreator = {
  setAuth: (auth) => ({
    type: ActionType.SET_AUTH,
    payload: auth
  }),
};

export {
  ActionType,
  ActionCreator
};
