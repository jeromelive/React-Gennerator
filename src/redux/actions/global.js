import { Loading } from "zarm";

export default {
  updateLoadingStatus(data) {
    data ? Loading.show() : Loading.hide();
    return (dispatch, getStore) => {
      dispatch({
        type: "UPDATE_LOADING_STATUS",
        data: {
          isLoading: data
        }
      });
    };
  }
};
