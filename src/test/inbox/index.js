import React, { Component } from "react";
import { getRequest, postRequest } from "../../utils/fetch";

class Comp extends Component {
  render() {
    return (
      <div className="inbox-content">
        <h1>inbox</h1>
        <button
          onClick={async () => {
            let [res, res1, res2, res3] = await Promise.all([
              postRequest("/matrix/open/auth2/isWxRegistered?flag=xingrenpai"),
              postRequest("/matrix/open/auth2/isWxRegistered?flag=xingrenpai"),
              postRequest("/matrix/open/auth2/isWxRegistered?flag=xingrenpai"),
              postRequest("/matrix/open/auth2/isWxRegistered?flag=xingrenpai")
            ]);
            // const res = await postRequest(
            //   "/matrix/open/auth2/isWxRegistered?flag=xingrenpai"
            // );
            console.log(res);
            console.log(res1);
            console.log(res2);
            console.log(res3);
          }}
        >
          Promise.all
        </button>
        <button
          onClick={async () => {
            let res = await postRequest(
              "/matrix/open/auth2/isWxRegistere?flag=xingrenpai"
            );
            console.log(res);
          }}
        >
          单请求
        </button>
      </div>
    );
  }
}

export default Comp;
