import {extend} from "../../utils/extend.utils";
import {ActionTypeAsync, ActionType} from "./actions";

const REST_API = `https://4.react.pages.academy`;

const initialState = {
  restApi: REST_API,
  films: [],
  promoId: null,
  loadingFilmsData: false,
  loadingPromoData: false,
  genres: [],
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.UPDATE_FILM:
      const newFilm = action.payload;
      return extend(state, {
        films: state.films.map((item) => (item.id === newFilm.id) ? newFilm : item)
      });
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
    case ActionTypeAsync.PROMO_REQUEST:
      return extend(state, {
        loadingPromoData: true,
      });
    case ActionTypeAsync.PROMO_SUCCESS:
      const id = action.payload;
      return extend(state, {
        promoId: id,
        loadingPromoData: false
      });
    case ActionTypeAsync.PROMO_FAILURE:
      return extend(state, {
        promoId: null,
        loadingPromoData: false
      });
    default:
      return state;
  }
};
