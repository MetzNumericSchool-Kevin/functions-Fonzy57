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

const innPotion = createPotion("potion_de_foyer", 50, 2);
const firePotion = createPotion("potion_de_feu", 10, 7);

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
/* COMMENTAIRE JUSTE POUR LE TEST */
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

/* --------------------------------------------------------------------- */
/* Allons faire de la cueillette, nous avons besoin de plus de potions ! */
/* --------------------------------------------------------------------- */

const allIngredientsProvidedAreGood = (ingredientsProvided, ingredientsNeeded) => {
  const sameLength = ingredientsProvided.length === ingredientsNeeded.length;
  const sameIngredients = ingredientsProvided.every(ingredient => ingredientsNeeded.includes(ingredient));
  return sameLength && sameIngredients;
};

const createPotionBis = (potion, ingredientsArray) => {
  const ingredientsNeeded = manuel_de_fabrication[potion.id].ingredients;

  if (allIngredientsProvidedAreGood(ingredientsArray, ingredientsNeeded)) {
    return potion;
  } else {
    console.error('Il manque des ingrédients à cette potion');
  }
};

const ingredientsHealingPotion = ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"];
const ingredientsHealingPotionAnyOrder = ["ecaille_de_dragon", "poudre_de_diamant", "eau_de_source"];
const ingredientsHealingPotionMissingOne = ["ecaille_de_dragon", "eau_de_source"];

const potionToMake = {
  id: "potion_soin",
  price: 10,
  stock: 0,
};
const tempsDeFabrication = manuel_de_fabrication[potionToMake.id].temps_de_fabrication;

/* ON A TOUS LES INGREDIENTS */
setTimeout(() => {
  createPotionBis(potionToMake, ingredientsHealingPotion);
}, tempsDeFabrication * 1000);

/* ON A TOUS LES INGREDIENTS MAIS PAS DANS LE BON ORDRE */
setTimeout(() => {
  createPotionBis(potionToMake, ingredientsHealingPotionAnyOrder);
}, tempsDeFabrication * 1000);

/* IL MANQUE UN INGREDIENT */
setTimeout(() => {
  createPotionBis(potionToMake, ingredientsHealingPotionMissingOne);
}, tempsDeFabrication * 1000);