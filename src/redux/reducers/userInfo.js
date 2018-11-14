const userInfo = (state = 0, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return action.info;
    default:
      return state;
  }
};

export default userInfo;
