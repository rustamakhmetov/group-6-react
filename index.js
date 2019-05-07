import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Math from '~src/components/math';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <Math v1={1} op={'+'} v2={2}/><br />
        <Math v1={1} op={'-'} v2={2}/><br />
        <Math v1={1} op={'*'} v2={2}/><br />
        <Math v1={1} op={'/'} v2={2}/><br />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
