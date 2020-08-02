import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuth = (state) => state[NAME_SPACE].authorizationStatus;
export const getUser = (state) => state[NAME_SPACE].user;


