import React, { Component } from 'react';

export default (title) => WrappedComp => {
  // 继承自Component的方式叫做代理方式的高阶组件；
  // 继承自WrappedComp叫做继承方式的高阶组件，也可以操作props，操作生命周期函数，但是尽量先考虑代理方式的高阶组件
  return class newComp extends Component {
    // 高阶组件显示名设置，react的默认静态属性，可手动设置，主要是方便调试
    static displayName = `HOC(${getDisplayName(WrappedComp)})`
    render() {
      // 操作props
      const { age, ...rest} = this.props
      return (
        <div>
          <h2>{title}</h2>
          <WrappedComp {...rest} sex="女"></WrappedComp>
        </div>
      );
    }
  }
}

function getDisplayName(WrappedComp) {
  return WrappedComp.displayName || WrappedComp.name || 'Component'
}
