import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILED,
} from "../../actionType/actionType";

export const getAllCommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case GET_COMMENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const removeCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case REMOVE_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
