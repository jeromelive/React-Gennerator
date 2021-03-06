import { Loading } from "zarm";
const initState = {
  isLoading: false
};

const globalState = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_GLOBAL":
      return Object.assign({}, state, action.data);
    case "UPDATE_LOADING_STATUS":
      action.data.isLoading ? Loading.show() : Loading.hide();
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export default globalState;
