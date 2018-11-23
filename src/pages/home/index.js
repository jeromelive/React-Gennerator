import React from 'react';
import actions from "../../redux/actions";
import { Connect } from "../../utils/decorators";

@Connect(["userInfo"], actions)
class Comp extends React.Component {
  render() {
    const { push } = this.props.history;
    return (
      <div>
        <p>1</p>
        <h1>Home</h1>
        <p>{this.props.userInfo}</p>
         <ul>
          <li
            className="test"
            onClick={() => {
              push("/mall");
            }}
          >
            mall
          </li>
          <li
            onClick={() => {
              push("/personal");
            }}
          >
            personal
          </li>
        </ul>
      </div>
    )
  }
}

export default Comp;