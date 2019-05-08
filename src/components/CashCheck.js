import React, { Component } from 'react';

import CashCheck from '~src/classes/CashCheck';

class CashCheckComponent extends Component {
  render() {
    const check = new CashCheck();
    check.addItem('tovar 1', 10, 5);
    check.addItem('tovar 2', 20, 3);
    const total = check.getTotal();

    return (
      <div className='cashCheck'>
        Cashcheck
        <ol>
          {check.items.map((item) => (
            <li>
              Product '{item.product}',
              count: {item.count},
              price: {item.price},
              cost: {item.count * item.price}
            </li>
          ))}
        </ol>
        <p>Total:</p>
        amount: {total.amount}<br />
        cost: {total.cost}
      </div>
    )
  }
}

export default CashCheckComponent;
