import {ActionCreator} from "./actions";
import {userDataAdapter} from "../../adapters/user";

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuth(userDataAdapter(response.data)));
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
