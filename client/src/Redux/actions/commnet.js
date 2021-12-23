import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILED,
} from "../../actionType/actionType";
import { url } from "../../api/api";

import axios from "axios";

export const getAllComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const res = await axios.get(url + `comments`);
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAILED, payload: error });
  }
};

export const removeComment = () => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: REMOVE_COMMENT });
  try {
    const res = await axios.get(url + `comment?email=${email}`);
    dispatch({ type: REMOVE_COMMENT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REMOVE_COMMENT_FAILED, payload: error });
  }
};
