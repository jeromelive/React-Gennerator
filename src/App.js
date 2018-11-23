import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LazyRoute from "lazy-route";
import { Connect } from "./utils/decorators";
import actions from "./redux/actions";
import Home from "./pages/home";

@Connect(["globalState"], actions)
class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* 使用首页不能使用 lazy-route */}
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/personal"
              render={props => {
                return (
                  <LazyRoute {...props} component={import("./pages/personal")} />
                );
              }}
            />
            <Route
              path="/mall"
              render={props => (
                <LazyRoute {...props} component={import("./pages/mall")} />
              )}
            />
            <Route
              path="/inbox"
              render={props => (
                <LazyRoute {...props} component={import("./test/inbox")} />
              )}
            />
            <Route
              path="/order"
              render={props => (
                <LazyRoute {...props} component={import("./test/rt")} />
              )}
            />
            <Route
              path="/weui"
              render={props => (
                <LazyRoute
                  {...props}
                  component={import("./test/weui")}
                />
              )}
            />
            <Route
              path="/redux"
              render={props => {
                return (
                  <LazyRoute
                    {...props}
                    component={import("./test/redux")}
                  />
                );
              }}
            />
            <Route
              path="/404"
              render={props => {
                return (
                  <LazyRoute
                    {...props}
                    component={import("./pages/404")}
                  />
                );
              }}
            />
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
