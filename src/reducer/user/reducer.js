import {ActionType} from "./actions";
import {AuthorizationStatus} from './enum';
import {extend} from "../../utils/extend.utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      const data = action.payload;
      const authStatus = data ? AuthorizationStatus.AUTH : AuthorizationStatus.NO_AUTH;
      return extend(state, {
        authorizationStatus: authStatus,
        user: data
      });
    default:
      return state;
  }
};
