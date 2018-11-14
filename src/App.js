import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LazyRoute from "lazy-route";
import { Toast } from "react-weui";
import { Connect } from "./utils/decorators";
import actions from "./redux/actions";
import Base from "./test/base";

@Connect(["globalState"], actions)
class App extends React.Component {
  render() {
    const { history, store } = this.props;
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* 使用首页不能使用 lazy-route */}
            <Route exact path="/" component={Base} />

            <Route
              exact
              path="/tabs"
              render={props => {
                return (
                  <LazyRoute {...props} component={import("./test/tabs")} />
                );
              }}
            />
            <Route
              path="/topics"
              render={props => (
                <LazyRoute {...props} component={import("./test/topics")} />
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
                  store={store}
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
                    store={store}
                    {...props}
                    component={import("./test/redux")}
                  />
                );
              }}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
        <Toast icon="loading" show={this.props.globalState.isLoading}>
          Loading...
        </Toast>
      </div>
    );
  }
}

export default App;
