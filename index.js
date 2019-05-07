import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CashCheck from '~src/classes/CashCheck';

class App extends Component {
  render() {
    return (
      <h1>Hello, World</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const check = new CashCheck();
check.addItem('tovar 1', 10, 5);
check.addItem('tovar 2', 20, 3);
console.log(check.items);
console.log(check.getTotal());
check.removeItem('tovar 1');
console.log(check.items);
