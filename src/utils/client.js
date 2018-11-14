export function isWeiXin() {
  return !!window.navigator.userAgent.match(/MicroMessenger/i);
}

export function isQQ() {
  return !window.navigator.userAgent.match(/\sQQ/i) === null;
}
