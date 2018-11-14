import "whatwg-fetch";
import CONSTANTS from "../const";
const ajaxIdsMap = {};

/**
 * get 请求
 */
export function getRequest(url) {
  return request({ url, method: "GET" });
}

/**
 * post 请求
 */
export function postRequest(url, data) {
  return request({ url, method: "POST", data });
}

/**
 * 请求方法
 */
function request(options) {
  let {
    url,
    data = {},
    header = {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method = "POST",
    dataType = "json",
    showLoading = true,
    success = () => {},
    error = () => {}
  } = options;

  let opts = {
    url,
    showLoading,
    success,
    error
  };

  if (showLoading) {
    ajaxIdsMap[url] = 1;
    window.STORE.dispatch({
      type: "UPDATE_GLOBAL",
      data: {
        isLoading: true
      }
    });
  }

  return fetch(`${CONSTANTS.const.host}${url}`, {
    data,
    header,
    method,
    dataType
  })
    .then(response => checkStatus(response, opts))
    .then(response => parseJson(response, opts))
    .then(response => {
      return response ? resHandler(response, opts) : errHandler();
    });
}

/**
 * 检测请求状态
 */
function checkStatus(response, options) {
  try {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (err) {
    hideLoading(options);
    console.log("服务器繁忙，请稍后再试");
  }
}

/**
 * 获取返回参数
 */
function parseJson(response, options) {
  try {
    return response.json();
  } catch (err) {
    // hideLoading(options);
    console.log("请求参数解析错误");
  }
}

/**
 * 隐藏 loading 处理
 */
function hideLoading(options) {
  delete ajaxIdsMap[options.url];
  if (Object.keys(ajaxIdsMap).length === 0) {
    setTimeout(() => {
      window.STORE.dispatch({
        type: "UPDATE_GLOBAL",
        data: {
          isLoading: false
        }
      });
    }, 300);
  }
}

/**
 * 请求成功处理
 */
function resHandler(response, options) {
  let { errorCode, message } = response;
  hideLoading(options);
  if (errorCode !== 0) {
    options.success && options.success();
  } else {
    options.error && options.error();
  }
  return response;
}

/**
 * 请求失败处理
 */
function errHandler() {
  console.log("服务器出现问题请稍后再试");
}
