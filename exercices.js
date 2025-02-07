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
  },
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

console.log(potionPrice("potion_soin", inventaire, 4));


