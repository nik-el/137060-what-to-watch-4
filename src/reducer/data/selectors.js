import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getFilmsLoadingState = (state) => {
  return state[NAME_SPACE].loadingFilmsData;
};

export const getGenres = (state) => {
  return state[NAME_SPACE].genres;
};
