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
import { url } from "../../api/api";

import axios from "axios";

export const getAllComments = () => async (dispatch) => {
  dispatch({ type: GET_REVIEWS });
  try {
    const res = await axios.get(url + `reviews`);
    dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_REVIEWS_FAILED, payload: error });
  }
};

export const addReview = (reviewData) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  const userName = getState().userReducer.currentUser.name;

  dispatch({ type: ADD_REVIEW });
  try {
    const res = await axios.post(
      url + `review?email=${email}&name=${userName}`,
      reviewData
    );
    dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_REVIEW_FAILED, payload: error });
  }
};

export const removeReview = () => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: REMOVE_REVIEW });
  try {
    const res = await axios.delete(url + `review?email=${email}`);
    dispatch({ type: REMOVE_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REMOVE_REVIEW_FAILED, payload: error });
  }
};
