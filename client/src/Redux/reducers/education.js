import {
  FETCH_ARTICLE_DATA_FAILED,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
  Add_ARTICLE_DATA,
  Add_ARTICLE_DATA_FAILED,
  Add_ARTICLE_DATA_SUCCESS,
  DELETE_ARTICLE_DATA,
  DELETE_ARTICLE_DATA_SUCCESS,
  DELETE_ARTICLE_DATA_FAILED,
  FIND_DATA_BYID,
  FIND_DATA_BYID_SUCCESS,
  FIND_DATA_BYID_FAILED,
  UPDATE_COURSE_DATA,
  UPDATE_COURSE_DATA_SUCCESS,
  UPDATE_COURSE_DATA_FAILED,
} from "../../actionType/actionType";

export const eudcationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case FETCH_ARTICLE_DATA_FAILED:
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

export const findcourseByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case FIND_DATA_BYID:
      return {
        ...state,
        loading: true,
      };
    case FIND_DATA_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        foundCourse: action.payload,
      };
    case FIND_DATA_BYID_FAILED:
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

export const AddcourseReducer = (state = {}, action) => {
  switch (action.type) {
    case Add_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case Add_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Add_ARTICLE_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const DeleteCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_DATA:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ARTICLE_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const courseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COURSE_DATA:
      return {
        ...state,
      };
    case UPDATE_COURSE_DATA_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_COURSE_DATA_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const teachersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_TEACHERS:
      return {
        ...state,
      };
    case FETCH_ALL_TEACHERS_SUCCESS:
      return {
        ...state,
        teachers: action.payload,
      };
    case FETCH_ALL_TEACHERS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
