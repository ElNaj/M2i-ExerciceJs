// Programme demandant à l'utilisateur de saisir un nombre N et 
// calculant la somme de tous les nombres entre 1 et N

let read = require("readline-sync");
let nombre = read.questionFloat("Saisir un nombre N : " );

console.log(`Vous avez saisi : ${nombre}`);

let somme = 0;
let i = 1;
let result ="";

while (i <= nombre) {
    somme += i;
    if (i === nombre) {
        result += i + " = ";
    } else {
        result += i + "+";
    }
    i++;
}
console.log(`${result} ${somme}`);