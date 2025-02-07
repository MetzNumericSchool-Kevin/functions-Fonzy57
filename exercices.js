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
    prix: 10,
    stock: 0,
  },
];

/* --------- */
/* Exercices */
/* --------- */


/* Salutation Aventurier */
const salutations = (name) => {
  console.log(`Salutations Aventurier ! Je me nomme ${name} pour vous servir.`);
};

salutations(nom_sorcier);

