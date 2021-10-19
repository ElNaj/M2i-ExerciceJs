// Programme du FizzBuzz qui demande à l'utilisateur de saisir un nombre entier
// pour afficher fizz, buzz ou fizzbuzz si multiple de 3, 5 ou 3 et 5

let read = require("readline-sync");
let nombre = read.questionInt("Saisir un nombre entier : " );

function fizzBuzz() {
    for (let i = 0; i <= nombre; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ");
        } else if (i % 5 === 0) {
            console.log("BUZZ");
        } else if (i % 3 === 0) {
            console.log("FIZZ");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();