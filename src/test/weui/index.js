import React from "react";
import { Button } from "react-weui";
import { Connect, SetTitle } from "../../utils/decorators";
import actions from "../../redux/actions";

@Connect([], actions)
export default class Comp extends React.Component {
  render() {
    console.log("weui", this.props);
    return (
      <div>
        <Button
          onClick={() => {
            this.props.updateGlobalLoading(true);
            setTimeout(() => {
              this.props.updateGlobalLoading(false);
            }, 2000);
          }}
        >
          hello wechat
        </Button>
      </div>
    );
  }
}
