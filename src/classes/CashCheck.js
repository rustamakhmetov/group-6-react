import CashCheckItem from './CashCheckItem';

class CashCheck {
  constructor(props) {
    this.items = [];
  }

  addItem(product, count, price) {
    const item = new CashCheckItem(product, count, price);
    this.items.push(item);
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
  }

  getTotal() {
    return this.items.reduce((total, item) => (
        {amount: total.amount + item.count, cost: total.cost + item.cost}
      ),
      {amount: 0, cost: 0}
    )
  }
}

export default CashCheck;
