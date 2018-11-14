import React, { Component } from "react";
import { Tabs } from "zarm";

class Comp extends Component {
  render() {
    return (
      <div className="tabs-content">
        <Tabs
          onChange={i => {
            console.log(i);
          }}
        >
          <Tabs.Panel title="选项卡1">1</Tabs.Panel>
          <Tabs.Panel title="选项卡2">2</Tabs.Panel>
        </Tabs>
      </div>
    );
  }
}

export default Comp;
