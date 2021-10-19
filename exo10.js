// Programme demandant à l'utilisateur de saisir un nombre et 
// génére une pyramide entière


let read = require("readline-sync");
let nombre = read.questionFloat("Saisir un nombre : " );

;

for (let i = 0; i < nombre; i++) {
    let etoile = "";
    for (let j = 1; j < nombre - i; j++) {
        etoile += " ";
    }
    for(let k = 1; k <= (2*i+1); k++) {
        etoile += "*";
    }
    console.log(etoile);
}