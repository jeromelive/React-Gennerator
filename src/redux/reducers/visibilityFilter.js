const initState = "SHOW_ALL";

const visibilityFilter = (state = initState, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
