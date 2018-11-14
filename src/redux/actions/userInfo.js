import { getRequest, postRequest } from "../../utils/fetch";
/**
 * 判断是否免登
 */
export default {
  updateUserInfo(info) {
    return async (dispatch, getStore) => {
      let res = await postRequest(
        "/matrix/open/auth2/isWxRegistered?flag=xingrenpai"
      );
      console.log(res);
      dispatch({
        type: "SET_USER_INFO",
        info: res.errorCode
      });
    };
  }
};
