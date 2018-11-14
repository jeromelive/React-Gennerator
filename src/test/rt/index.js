import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import RouteLazy from "route-lazy";

class Base extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <Router>
        <Switch>
          <Route
            path={`${path}/list`}
            render={props => (
              <RouteLazy {...props} component={import("./list")} />
            )}
          />
          <Route
            path={`${path}/detail`}
            render={props => (
              <RouteLazy {...props} component={import("./detail")} />
            )}
          />
          <Redirect from="*" to={`${path}/list`} />
        </Switch>
      </Router>
    );
  }
}

export default Base;
