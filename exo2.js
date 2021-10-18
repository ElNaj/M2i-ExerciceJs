// Programme qui demande à l'utilisateur de saisir 2 nombres ENTIERS et calcul la somme des 2 nombres

let read = require("readline-sync");

let num1 = read.questionInt("Veuillez saisir un premier nombre entier : " );
let num2 = read.questionInt("Veuillez saisir un premier nombre entier : " );

let addition = (num1, num2) => {
    return num1 + num2;
}
console.log(`La somme de ${num1} + ${num2} vaut ${addition(num1, num2)} `);