import { PHP_BASE_URL } from "constants";

export function setTitle(title) {
  document.title = title;
  const i = document.createElement("iframe");
  i.src = "//m.baidu.com/favicon.ico";
  i.style.display = "none";
  i.onload = () => {
    setTimeout(() => {
      i.remove();
    }, 9);
  };
  document.body.appendChild(i);
}

export function auth(rUrl = window.location.href) {
  window.location.replace(
    `${PHP_BASE_URL}matrix/wechat/userInfo?type=1&flag=xingrenpai&rurl=${encodeURIComponent(
      rUrl.replace("http://", "").replace("https://", "")
    )}`
  );
}
