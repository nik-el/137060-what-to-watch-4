import {ActionCreator} from "./actions";

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuth(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.setAuth());
      });
  },
  login: (email, password) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password,
    })
      .then((response) => {
        dispatch(ActionCreator.setAuth(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.setAuth());
      });
  },
};

export {
  Operation
};
