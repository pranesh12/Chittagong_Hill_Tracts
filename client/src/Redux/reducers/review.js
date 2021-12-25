import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILED,
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
  REMOVE_REVIEW,
  REMOVE_REVIEW_SUCCESS,
  REMOVE_REVIEW_FAILED,
} from "../../actionType/actionType";

export const getAllreviewReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        loading: true,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case GET_REVIEWS_FAILED:
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

export const addReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case ADD_REVIEW_FAILED:
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

export const removeReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_REVIEW:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case REMOVE_REVIEW_FAILED:
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
