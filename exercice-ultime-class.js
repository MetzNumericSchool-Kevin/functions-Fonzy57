import { Potion } from "./classes/potion.class.js";
import { Inventory } from './classes/inventory.class.js';

const inventoryTestA = new Inventory();

const potionA = new Potion("potion_de_soin", 10, 1);
const potionB = new Potion("potion_mana", 100, 0);

inventoryTestA.addPotion(potionA);
console.log("En stock : ", inventoryTestA.getPotionsInStock());
inventoryTestA.addPotion(potionA);
inventoryTestA.addPotion(potionB);
console.log("En stock : ", inventoryTestA.getPotionsInStock());
console.log("Out of stock", inventoryTestA.getPotionsOutOfStock());
inventoryTestA.addPotion(potionB);
console.log("En stock : ", inventoryTestA.getPotionsInStock());
console.log("Out of stock", inventoryTestA.getPotionsOutOfStock());
