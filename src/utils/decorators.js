import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/*
* 组件的延时加载
* promise   Promise Promise对象
* Loading   Component 加载组件
* 传入promise对象，当promise中执行resole时候组件加载完成
* 也可以异步的加载组件或者模块
* */
export function loading(promise, Loading = "") {
  return function(Target) {
    return class Com extends React.Component {
      constructor(props) {
        super();
      }
      state = {
        loading: false,
        load: []
      };
      componentWillMount() {
        this.setState({
          loading: true
        });
        if (promise)
          promise(this.props, this.state).then(modules => {
            let asyncComponent = [];
            if (modules) {
              modules.forEach(item => {
                asyncComponent.push(item.default);
              });
            }
            this.setState({
              loading: false,
              load: asyncComponent
            });
          });
      }
      render() {
        if (this.state.loading) {
          return !Loading ? "" : <Loading />;
        }
        return <Target {...this.props} load={this.state.load} />;
      }
    };
  };
}

/**
 * redux的connect方法和组件链接
 * reducers Array
 * actions Object redux的actions
 */

export function Connect(reducers, actions) {
  return target => {
    return connect(
      state => {
        let stateProps = {};
        reducers.forEach(item => {
          stateProps[item] = state[item];
        });
        return stateProps;
      },
      dispatch => {
        return bindActionCreators(actions, dispatch);
      }
    )(target);
  };
}

/**
 * 设置title
 * title String 标题名称
 */
export function SetTitle(title) {
  return target => {
    let componentWillMount = target.prototype.componentWillMount;
    target.prototype.componentWillMount = function() {
      _setTitle(title);
      if (componentWillMount) componentWillMount.apply(this);
    };
  };
}

// 设置文档的标题 html标题
function _setTitle(title) {
  window.document.title = title;
  let iframe = document.createElement("iframe");
  iframe.src = "../favicon.ico";
  iframe.style.display = "none";
  // 重新加载一个iframe就会重新刷新 document.title
  iframe.onload = function() {
    setTimeout(function() {
      iframe.remove();
    }, 0);
  };
  document.body.appendChild(iframe);
}
