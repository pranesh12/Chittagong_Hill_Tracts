import axios from "axios";
import {
  FETCH_ARTICLE_DATA,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA_FAILED,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
  Add_ARTICLE_DATA,
  Add_ARTICLE_DATA_SUCCESS,
  Add_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA,
  DELETE_ARTICLE_DATA_FAILED,
  DELETE_ARTICLE_DATA_SUCCESS,
  FIND_DATA_BYID,
  FIND_DATA_BYID_SUCCESS,
  FIND_DATA_BYID_FAILED,
  UPDATE_COURSE_DATA,
  UPDATE_COURSE_DATA_SUCCESS,
  UPDATE_COURSE_DATA_FAILED,
} from "../../actionType/actionType";

import { url } from "../../api/api";

export const getEducationalData = () => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_DATA });
  try {
    const res = await axios.get(url + `info`);
    dispatch({ type: FETCH_ARTICLE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const getTeachers = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_TEACHERS });
  try {
    const res = await axios.get(url + `teachers`);
    dispatch({ type: FETCH_ALL_TEACHERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_TEACHERS_FAILED });
  }
};

export const addEducationData = (data) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: Add_ARTICLE_DATA });
  try {
    const res = await axios.post(url + `addcourse?email=${email}`, data);
    dispatch({ type: Add_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = `/admin`;
  } catch (error) {
    dispatch({ type: Add_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const deleteEducationData = (id) => async (dispatch, getState) => {
  const email = getState().userReducer.currentUser.email;
  dispatch({ type: DELETE_ARTICLE_DATA });
  try {
    const res = await axios.delete(url + `removecourse?id=${id}&email=${email}`);
    dispatch({ type: DELETE_ARTICLE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: DELETE_ARTICLE_DATA_FAILED, payload: error });
  }
};

export const findDataByid = (id) => async (dispatch) => {
  dispatch({ type: FIND_DATA_BYID });
  try {
    const res = await axios.get(url + `getCourse?id=${id}`);
    dispatch({ type: FIND_DATA_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_DATA_BYID_FAILED, payload: error });
  }
};

export const updateCourse = (id, newData) => async (dispatch, getState) => {
  const email = getState.userReducer().currentUser.email;
  dispatch({ type: UPDATE_COURSE_DATA });
  const updataedData = {
    id,
    newData,
  };

  try {
    const res = await axios.put(url + `update?email=${email}`, updataedData);
    dispatch({ type: UPDATE_COURSE_DATA_SUCCESS, payload: res.data });
    window.location = "/admin";
  } catch (error) {
    dispatch({ type: UPDATE_COURSE_DATA_FAILED, payload: error });
  }
};
