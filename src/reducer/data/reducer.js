import {extend} from "../../utils/extend.utils";
import {ActionTypeAsync} from "./actions";

const REST_API = `https://4.react.pages.academy`;

const initialState = {
  restApi: REST_API,
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
      const {films, genres} = action.payload;
      return extend(state, {
        films,
        genres,
        loadingFilmsData: false
      });
    case ActionTypeAsync.FILMS_FAILURE:
      return extend(state, {
        films: [],
        genres: [],
        loadingFilmsData: false
      });
    default:
      return state;
  }
};
