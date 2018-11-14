import { isQQ, isWeiXin } from "./client";

/**
 * 按需加载各端不同的逻辑代码
 * @param {*} param
 */
function bridge({ action, data }) {
  require.ensure(["./cs/weixin", "./cs/qq"], () => {
    if (isQQ()) {
      const target = require("./cs/qq").default;
      target[action](data);
    } else if (isWeiXin()) {
      const target = require("./cs/weixin");
      target[action](data);
    } else {
      // isBrowser
      document.title = data;
    }
  });
}

export function setTitle(data) {
  bridge({
    action: "setTitle",
    data
  });
}
