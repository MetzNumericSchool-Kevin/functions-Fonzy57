/* ----------------- */
/* Thème 🔮🧙‍♂️🧪🪙🍄 */
/* ----------------- */

const nom_sorcier = "Gandlaf le Blanc 🧙‍♂️";

const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};

const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    price: 10,
    stock: 0,
  }
];

/* --------- */
/* Exercices */
/* --------- */

/* --------------------- */
/* Salutation Aventurier */
/* --------------------- */
const salutations = (name) => {
  console.log(`Salutations Aventurier ! Je me nomme ${name} pour vous servir.`);
};

salutations(nom_sorcier);

/* ------------------------------ */
/* Quel est le tarif d'une potion */
/* ------------------------------ */
const potionPrice = (potionId, inventory, quantity = 1) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === potionId) {
      return inventory[i].price * quantity;
    }
  }
};

console.log(potionPrice("potion_soin", inventaire));
console.log(potionPrice("potion_soin", inventaire, 3));

/* --------------------- */
/* Fabrication de potion */
/* --------------------- */

const createPotion = (id, price, stock) => {
  return {
    id,
    price,
    stock,
  };
};

const innPotion = createPotion("Potion de foyer", 50, 2);
const firePotion = createPotion("Potion de feu", 10, 7);

console.log(innPotion);
console.log(firePotion);

/* -------------------------------------------- */
/* Ajout de nouvelles potions dans l'inventaire */
/* -------------------------------------------- */

const addPotionToInventory = (inventory, potion) => {
  let existingPotion = inventory.find(item => item.id === potion.id);

  if (existingPotion) {
    existingPotion.stock += potion.stock;
    existingPotion.price = potion.price;
  } else {
    inventory.push({ ...potion });
  }
};

console.log("Avant :", inventaire);
addPotionToInventory(inventaire, firePotion);
addPotionToInventory(inventaire, innPotion);
inventaire.sort();
/* addPotionToInventory(inventaire, {
  id: "potion_soin",
  price: 20,
  stock: 10,
}); */
inventaire.sort();
console.log("Après ajout de Fire Potion :", inventaire);

/* ------------------------------ */
/* Cherche moi les potions qui... */
/* ------------------------------ */

const getPotionsInStock = (inventory) => {
  return inventory.filter(item => item.stock > 0);
};

const stockTest = getPotionsInStock(inventaire);
console.log(stockTest);

const getPotionsOutOfStock = (inventory) => {
  return inventory.filter(item => item.stock === 0);
};
console.log(getPotionsOutOfStock(inventaire));

console.log(inventaire);
