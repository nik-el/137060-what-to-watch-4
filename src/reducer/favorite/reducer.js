import {extend} from "../../utils/extend.utils";
import {ActionTypeAsync} from "./actions";

const initialState = {
  favorites: [],
  loadingFavoritesData: false,
  loadingSetFavorite: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeAsync.GET_FAVORITES_REQUEST:
      return extend(state, {
        loadingFavoritesData: true,
      });
    case ActionTypeAsync.GET_FAVORITES_SUCCESS:
      return extend(state, {
        loadingFavoritesData: false,
        favorites: action.payload,
      });
    case ActionTypeAsync.GET_FAVORITES_FAILURE:
      return extend(state, {
        loadingFavoritesData: false,
        favorites: [],
      });
    case ActionTypeAsync.SET_FAVORITE_REQUEST:
      return extend(state, {
        loadingSetFavorite: true,
      });
    case ActionTypeAsync.SET_FAVORITE_FAILURE:
      return extend(state, {
        loadingSetFavorite: false,
      });
    default:
      return state;
  }
};
