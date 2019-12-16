import React, { Component } from 'react';
import high from './high';

@high('高阶组件操作props')
class A extends Component {
  render() {
    return (
      <div>
        <h4>名字：{this.props.name} </h4>
        <h4>年龄：{this.props.age} </h4>
        <h4>性别：{this.props.sex} </h4>
      </div>
    );
  }
}

export default A

//装饰器等价于 export default high('高阶组件操作props')(A)