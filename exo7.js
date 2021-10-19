// Programme demandant à l'utilisateur de saisir un nombre N et 
// calculant la somme de tous les nombres entre 1 et N

let read = require("readline-sync");
let nombre = read.questionFloat("Saisir un nombre N : " );

console.log(`Vous avez saisi : ${nombre}`);

let somme = 0;
let i = 1;
while (i <= nombre) {
    somme = somme + i;
    i++;
}
console.log(`Somme de 1 à N vaut : ${somme}`);