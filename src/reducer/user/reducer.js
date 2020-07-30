import {ActionType} from "./actions";
import {AuthorizationStatus} from './enum';
import {extend} from "../../utils/extend.utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      const authStatus = action.payload;
      return extend(state, {
        authorizationStatus: authStatus,
      });
    default:
      return state;
  }
};
