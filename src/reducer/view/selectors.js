import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.VIEW;

export const getFeedLimit = (state) => {
  return state[NAME_SPACE].feedLimit;
};

export const getCurrentGenre = (state) => {
  return state[NAME_SPACE].currentGenre;
};
