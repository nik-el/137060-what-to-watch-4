import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;


export const getFilms = (state) => state[NAME_SPACE].films;
export const getFilmsLoadingState = (state) => state[NAME_SPACE].loadingFilmsData;
export const getPromoLoadingState = (state) => state[NAME_SPACE].loadingPromoData;
export const getGenres = (state) => state[NAME_SPACE].genres;
export const getRestApi = (state) => state[NAME_SPACE].restApi;
export const getPromoId = (state) => state[NAME_SPACE].promoId;
