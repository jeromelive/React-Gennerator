import React, { Component } from "react";
import { Tabs } from "zarm";
const { Panel } = Tabs;

class Comp extends Component {
  render() {
    return (
      <div className="detail-content">
        <Tabs
          onChange={i => {
            console.log(i);
          }}
        >
          <Panel title="选项卡1">
            <div className="content">选项卡detail1内容</div>
          </Panel>
          <Panel title="选项卡2">
            <div className="content">选项卡detail2内容</div>
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default Comp;
