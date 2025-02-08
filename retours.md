# Retour sur le TP

Pour l'épreuve ultime il y a une erreur dans le code au niveau de `value` :

```js
// Déclaration d'une fonction permettant de créer un compteur indépendant
function createCounter() {
  // count sera "capturé" par l'objet retourné par cette fonction car les méthodes de l'objet ont une dépendance envers count
  // ce qui permettra à chaque création de compteur, d'avoir une variable count unique
  let count = 0; // variable locale à la fonction createCounter

  return {
    // increment est ici une méthode "closure" capturant la variable "libre" count dans son contexte
    increment: function () {
      count++;
    },
    // decrement est ici une méthode "closure" capturant la variable "libre" count dans son contexte
    decrement: function () {
      count--;
    },
    // value est ici une méthode "closure" capturant la variable "libre" count dans son contexte

    /* ---------------------------------------- */
    /* ICI CE N'EST PAS "value" MAIS "getValue" */
    /* -------------------------------------- --*/
    value: function () {
      return count;
    },
  };
}

// à l'utilisation
const compteurA = createCounter();
const compteurB = createCounter();

compteurA.increment();

compteurB.increment();
compteurB.increment();

console.log(compteurA.getValue()); // Affichera 1
console.log(compteurB.getValue()); // Affichera 2
```
