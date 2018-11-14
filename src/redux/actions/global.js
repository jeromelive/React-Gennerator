export default {
  updateGlobalLoading(data) {
    return (dispatch, getStore) => {
      dispatch({
        type: "UPDATE_GLOBAL",
        data: {
          isLoading: data
        }
      });
    };
  }
};
