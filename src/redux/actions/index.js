import todo from "./todo";
import visibilityFilter from "./visibilityFilter";
import userInfo from "./userInfo";
import global from "./global";

const action = Object.assign({}, todo, visibilityFilter, userInfo, global);

export default action;
