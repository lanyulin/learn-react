import React, { Component } from 'react';

export default function high(WrappedComp) {
  return class A extends Component {
    render() {
      return (
        <div>
          <p>就大家都静静的就</p>
          <WrappedComp></WrappedComp>
        </div>
      );
    }
  }
}
