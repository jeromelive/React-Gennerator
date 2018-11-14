import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import userInfo from "./userInfo";
import globalState from "./global";

export default combineReducers({
  todos,
  visibilityFilter,
  userInfo,
  globalState
});
