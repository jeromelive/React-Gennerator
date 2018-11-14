import React from "react";
import actions from "../../redux/actions";
import { Connect } from "../../utils/decorators";

@Connect(["todos", "visibilityFilter", "userInfo"], actions)
class Comp extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={() => {
            // window._hmt.push([
            //   "_trackEvent",
            //   "category",
            //   "action",
            //   "opt_label",
            //   "opt_value"
            // ]);
            console.log(this.props.setVisibilityFilter("1231321"));
          }}
        >
          add
        </button>
        <br />
        <button
          onClick={() => {
            this.props.updateUserInfo(11);
          }}
        >
          subtract
        </button>
        <p>{this.props.visibilityFilter}</p>
        <p>{this.props.userInfo}</p>
      </div>
    );
  }
}

export default Comp;
