import {
  COMMENT_BY_USER_SUCCESS,
  COMMENT_BY_USER,
  COMMENT_BY_USER_FAILED,
} from "../../actionType/actionType";
import { url } from "../../api/api";
import axios from "axios";

export const commnetbyUser = () => async (dispatch) => {
  dispatch({ type: COMMENT_BY_USER });
  try {
    const res = await axios.get(url + `article`);
    dispatch({ type: COMMENT_BY_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: COMMENT_BY_USER_FAILED, payload: error });
  }
};
