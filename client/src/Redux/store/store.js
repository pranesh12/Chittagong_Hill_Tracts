import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  eudcationReducer,
  teachersReducer,
  courseUpdateReducer,
  findcourseByIdReducer,
  AddcourseReducer,
  DeleteCourseReducer,
} from "../reducers/education";
import { userReducer } from "../reducers/user";

const finalReducers = combineReducers({
  eudcationReducer: eudcationReducer,
  teachersReducer: teachersReducer,
  userReducer: userReducer,
  courseUpdateReducer: courseUpdateReducer,
  findcourseByIdReducer: findcourseByIdReducer,
  AddcourseReducer: AddcourseReducer,
  DeleteCourseReducer: DeleteCourseReducer,
});
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
const initialReducer = {
  userReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
