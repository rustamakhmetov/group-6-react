class CashCheckItem {
  constructor(product, count, price) {
    this.product = product;
    this.count = count;
    this.price = price;
  }

  get cost() {
    return this.count * this.price;
  }
}

export default CashCheckItem;
