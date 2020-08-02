import {extend} from "../../utils/extend.utils";
import {ActionTypeAsync} from "./actions";

const initialState = {
  comments: [],
  loadingCommentsData: false,
  loadingAddingComment: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeAsync.GET_COMMENTS_REQUEST:
      return extend(state, {
        loadingCommentsData: true,
      });
    case ActionTypeAsync.GET_COMMENTS_SUCCESS:
      return extend(state, {
        loadingCommentsData: false,
        comments: action.payload,
      });
    case ActionTypeAsync.GET_COMMENTS_FAILURE:
      return extend(state, {
        loadingCommentsData: false,
        comments: [],
      });
    case ActionTypeAsync.ADD_COMMENT_REQUEST:
      return extend(state, {
        loadingAddingComment: true,
      });
    case ActionTypeAsync.ADD_COMMENT_SUCCESS:
      return extend(state, {
        loadingAddingComment: false,
        comments: action.payload,
      });
    case ActionTypeAsync.ADD_COMMENT_FAILURE:
      return extend(state, {
        loadingAddingComment: false,
      });
    default:
      return state;
  }
};
