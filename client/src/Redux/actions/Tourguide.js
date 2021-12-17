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
  GET_PLACE_BY_DISTRICT,
  GET_PLACE_BY_DISTRICT_SUCCESS,
  GET_PLACE_BY_DISTRICT_FAILED,
  DELETE_TOUR_GUIDE,
  DELETE_TOUR_GUIDE_SUCCESS,
  DELETE_TOUR_GUIDE_FAILED,
  EDIT_TOUR_GUIDE,
  EDIT_TOUR_GUIDE_SUCCESS,
  EDIT_TOUR_GUIDE_FAILED,
  FIND_TOUR_GUIDEBY_ID,
  FIND_TOUR_GUIDEBY_ID_SUCCESS,
  FIND_TOUR_GUIDEBY_ID_FAILED,
} from "../../actionType/actionType";

import axios from "axios";
import { url } from "../../api/api";

export const getAllTourGuide = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TOUR_GUIDE });
  try {
    const res = await axios.get(url + `tourguides`);
    dispatch({ type: GET_ALL_TOUR_GUIDE_SUCCESS, payload: res.data });
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

export const getPlaceByDistrict = (district) => async (dispatch) => {
  dispatch({ type: GET_PLACE_BY_DISTRICT });
  try {
    const res = await axios.get(url + `getPlaces?district=${district}`);
    dispatch({ type: GET_PLACE_BY_DISTRICT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: GET_PLACE_BY_DISTRICT_FAILED, payload: error });
  }
};

//findTour By id
export const findTourGuideById = (id) => async (dispatch) => {
  dispatch({ type: FIND_TOUR_GUIDEBY_ID });
  try {
    const res = await axios.get(url + `gettourguide?id=${id}`);
    dispatch({ type: FIND_TOUR_GUIDEBY_ID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_TOUR_GUIDEBY_ID_FAILED, payload: error });
  }
};

//deleteTourguide
export const deleteTourGuide = (id) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: DELETE_TOUR_GUIDE });
  try {
    const res = await axios.delete(url + `tourguide?id=${id}&email=${email}`);
    dispatch({ type: DELETE_TOUR_GUIDE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: DELETE_TOUR_GUIDE_FAILED, payload: error });
  }
};

//editTourguide

export const editTourGuide = (id, newtourGuide) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: EDIT_TOUR_GUIDE });
  const updataedData = {
    id,
    newtourGuide,
  };
  console.log(updataedData);
  try {
    const res = await axios.put(url + `editTourGuide?email=${email}`, updataedData);
    dispatch({ type: EDIT_TOUR_GUIDE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: EDIT_TOUR_GUIDE_FAILED, payload: error });
  }
};
