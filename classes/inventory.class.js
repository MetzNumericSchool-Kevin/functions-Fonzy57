import { Potion } from './potion.class.js';

export class Inventory {
  #potions;

  constructor() {
    this.#potions = [];
  }

  addPotion (potion) {
    const existingPotion = this.#potions.find(item => item.getId() === potion.getId());

    if (existingPotion) {
      const newStock = existingPotion.getStock() + 1;
      existingPotion.setStock(newStock);
    } else {
      this.#potions.push(potion);
    }
  }

  getPotionsInStock () {
    return this.#potions.filter(potion => potion.getStock() > 0);
  }

  getPotionsOutOfStock () {
    return this.#potions.filter(potion => potion.getStock() === 0);
  }

  getInventory () {
    return this.#potions.map(potion => potion.getPotionInfos());
  }
}