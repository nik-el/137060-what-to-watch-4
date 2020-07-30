import {ActionCreator} from "./actions";
import {AuthorizationStatus} from './enum';

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuth(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (email, password) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password,
    })
      .then(() => {
        dispatch(ActionCreator.setAuth(AuthorizationStatus.AUTH));
      });
  },
};

export {
  Operation
};
