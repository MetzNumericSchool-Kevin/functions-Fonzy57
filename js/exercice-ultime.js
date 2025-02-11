const healingPotion = {
  id: "potion_soin",
  price: 10,
  stock: 0,
};

const manaPotion = {
  id: "potion_de_mana",
  price: 20,
  stock: 0,
};

const firePotion = {
  id: "potion_de_feu",
  price: 35,
  stock: 0,
};

const invisibilityPotion = {
  id: "potion_d_invisibilite",
  price: 100,
  stock: 0,
};

function creationInventaire () {
  const inventaire = [];

  return {
    ajoutPotion (potion) {
      // code de l'ajout de potion dans l'inventaire
      const existingPotion = inventaire.find(item => item.id === potion.id);

      if (existingPotion) {
        existingPotion.stock += 1;
      } else {
        inventaire.push({ ...potion, stock: 1 });
      }
    },
    lesPotionsEnStock () {
      // retourne la liste des potions en stocks
      return inventaire.filter(item => item.stock > 0);
    },
    lesPotionsEnRuptureDeStock () {
      // retourne la liste des potions en rupture de stock
      return inventaire.filter(item => item.stock === 0);
    },
  };
}

const inventaireBoutiquePotionsA = creationInventaire();
const inventaireBoutiquePotionsB = creationInventaire();

inventaireBoutiquePotionsA.ajoutPotion(healingPotion);
inventaireBoutiquePotionsA.ajoutPotion(healingPotion);
inventaireBoutiquePotionsA.ajoutPotion(firePotion);

inventaireBoutiquePotionsB.ajoutPotion(healingPotion);
inventaireBoutiquePotionsB.ajoutPotion(invisibilityPotion);
inventaireBoutiquePotionsB.ajoutPotion(firePotion);

console.log("Potions en stock INVENTAIRE A", inventaireBoutiquePotionsA.lesPotionsEnStock());
console.log("Potions en stock INVENTAIRE B", inventaireBoutiquePotionsB.lesPotionsEnStock());
