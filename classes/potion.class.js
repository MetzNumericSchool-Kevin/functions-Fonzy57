export class Potion {
  #id;
  #price;
  #stock;

  constructor(
    id,
    price,
    stock
  ) {
    this.#id = id;
    this.#price = price;
    this.#stock = stock;
  }

  getId () {
    return this.#id;
  }

  getPrice () {
    return this.#price;
  }

  setPrice (newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.error("Le prix doit être positif !");
    }
  }

  getStock () {
    return this.#stock;
  }

  setStock (newStock) {
    if (newStock >= 0) {
      this.#stock = newStock;
    } else {
      console.error("Le stock ne peut pas être négatif !");
    }
  }

  getInfos () {
    return {
      id: this.#id,
      price: this.#price,
      stock: this.#stock,
    };
  }
}
