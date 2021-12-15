import {
  TOUR_GUIDE_DETAILS_FAILED,
  TOUR_GUIDE_DETAILS_SUCCESS,
  TOUR_GUIDE_DETAILS,
  GET_ALL_TOUR_GUIDE,
  GET_ALL_TOUR_GUIDE_SUCCESS,
  GET_ALL_TOUR_GUIDE_FAILED,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT,
  ADD_TOUR_GUIDE,
  ADD_TOUR_GUIDE_FAILED,
  ADD_TOUR_GUIDE_SUCCESS,
  GET_PLACE_BY_DISTRICT,
  GET_PLACE_BY_DISTRICT_SUCCESS,
  GET_PLACE_BY_DISTRICT_FAILED,
} from "../../actionType/actionType";

//All Tours guide data
export const findAllTourGuides = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_TOUR_GUIDE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case GET_ALL_TOUR_GUIDE_FAILED:
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

//Tours data by distirct and palce
export const findGuidesByDistrictAndPlaceReducer = (state = {}, action) => {
  switch (action.type) {
    case FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT:
      return {
        ...state,
        loading: true,
      };
    case FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED:
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

export const tourGuideDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case TOUR_GUIDE_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case TOUR_GUIDE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case TOUR_GUIDE_DETAILS_FAILED:
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

export const addTourGuideReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TOUR_GUIDE:
      return {
        ...state,
        loading: true,
      };
    case ADD_TOUR_GUIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case ADD_TOUR_GUIDE_FAILED:
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

export const getPlaceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLACE_BY_DISTRICT:
      return {
        ...state,
        loading: true,
      };
    case GET_PLACE_BY_DISTRICT_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchDAta: action.payload,
      };
    case GET_PLACE_BY_DISTRICT_FAILED:
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
