const env = process.env.NODE_ENV;
const version = "v1.0.0";
const constants = {
  development: {
    host: "https://dev-ali-mp.zhongan.com",
    version
  },
  production: {
    host: "https://dev-ali-mp.zhongan.com",
    version
  }
};
const titles = {
  "/": "玩够城",
  "/mall": "0元购",
  "/personal": "我的",
  "/tabs": "tabs",
  "/topics": "topics",
  "/order/list": "订单列表",
  "/order/detail": "订单详情",
  "/weui": "weui",
  "/redux": "redux"
};

export default {
  const: constants[env],
  name: "玩购城",
  titles
};
