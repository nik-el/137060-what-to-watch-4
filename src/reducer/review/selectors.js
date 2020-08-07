import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.REVIEW;

export const getLoadingAddingCommentStatus = (state) => state[NAME_SPACE].loadingAddingComment;
export const getComments = (state) => state[NAME_SPACE].comments;

