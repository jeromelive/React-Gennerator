import React from "react";
import actions from "../../redux/actions";
import { Connect } from "../../utils/decorators";

@Connect(["userInfo"], actions)
class Comp extends React.Component {
  render() {
    return(
      <div>
        <h1>Personal</h1>
        <p>{this.props.userInfo}</p>
      </div>
    )
  }
}

export default Comp;