import "weui";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import configureStore from "./store";
import vConsole from "vconsole";
import CONSTANTS from "./const";
import { setTitle } from "./utils/bridge";

import "./style/reset.scss";
import "react-weui/build/packages/react-weui.css";
import "zarm/dist/zarm.min.css";

new vConsole();
let store = configureStore();
window.STORE = store;

const history = createHistory();
function init(location) {
  window.scrollTo(0, 0);
  // window._hmt && window._hmt.push(["_trackPageview", location.href]);
  setTitle(CONSTANTS.titles[location.pathname] || CONSTANTS.name);
}
// 路由处理
init(window.location);
history.listen((location, action) => {
  init(location, action);
});

ReactDOM.render(
  // <Provider store={store}>
  //   <App history={history} />
  // </Provider>,
  <App store={store} history={history} />,
  document.getElementById("root")
);
// registerServiceWorker();
