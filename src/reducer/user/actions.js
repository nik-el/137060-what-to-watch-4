const ActionType = {
  SET_AUTH: `SET_AUTH`
};

const ActionCreator = {
  setAuth: (authData) => ({
    type: ActionType.SET_AUTH,
    payload: authData
  }),
};

export {
  ActionType,
  ActionCreator
};
