import {extend} from "../../utils/extend.utils";
import {ActionType, ActionTypeAsync} from "./actions";

const initialState = {
  films: [],
  loadingFilmsData: false,
  genres: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeAsync.FILMS_REQUEST:
      return extend(state, {
        loadingFilmsData: true,
      });
    case ActionTypeAsync.FILMS_SUCCESS:
      const films = action.payload;
      return extend(state, {
        films,
        loadingFilmsData: false
      });
    case ActionTypeAsync.FILMS_FAILURE:
      return extend(state, {
        films: [],
        loadingFilmsData: false
      });
    case ActionType.SET_GENRES:
      const genres = action.payload;
      return extend(state, {
        genres,
      });
    default:
      return state;
  }
};
