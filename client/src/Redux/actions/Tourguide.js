import {
  GET_ALL_TOUR_GUIDE,
  TOUR_GUIDE_DETAILS,
  GET_ALL_TOUR_GUIDE_FAILED,
  GET_ALL_TOUR_GUIDE_SUCCESS,
  TOUR_GUIDE_DETAILS_SUCCESS,
  TOUR_GUIDE_DETAILS_FAILED,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS,
  FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED,
  ADD_TOUR_GUIDE,
  ADD_TOUR_GUIDE_SUCCESS,
  ADD_TOUR_GUIDE_FAILED,
} from "../../actionType/actionType";

import axios from "axios";
import { url } from "../../api/api";

export const getAllTourGuide = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TOUR_GUIDE });
  try {
    const res = await axios.get(url + `tourGuides`);
    dispatch({ type: GET_ALL_TOUR_GUIDE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: GET_ALL_TOUR_GUIDE_FAILED, payload: error });
  }
};

export const tourGuideDetails = (district) => async (dispatch) => {
  dispatch({ type: TOUR_GUIDE_DETAILS });
  try {
    const res = await axios.get(url + `tourguide`, district);
    dispatch({ type: TOUR_GUIDE_DETAILS_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: TOUR_GUIDE_DETAILS_FAILED, payload: error });
  }
};

export const findTourguideByDistrictAndPlace =
  (district, place) => async (dispatch) => {
    dispatch({ type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT });

    try {
      const res = await axios.get(
        url + `tourGuidesByPlace?district=${district}&place=${place}`
      );
      dispatch({
        type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FIND_TOURGUIDES_BY_PLACE_AND_DISTRICT_FAILED,
        payload: error,
      });
    }
  };

export const addTourGuide = (guideData) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: ADD_TOUR_GUIDE });
  try {
    const res = await axios.post(url + `addtourguide?email=${email}`, guideData);
    dispatch({ type: ADD_TOUR_GUIDE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ADD_TOUR_GUIDE_FAILED, payload: error });
  }
};
