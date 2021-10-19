// Programme demandant à l'utilisateur de saisir un nombre et 
// génére une drôle de pyramide, adaptation exo8 pour faire descendre l'escalier

let read = require("readline-sync");
let nombre = read.questionInt("Saisir un nombre : " );

let etoile = "";

for (let i = 1; i <= nombre; i++) {
        etoile += "*";
        console.log(etoile);
}
for (let j = nombre - 1; j >= 0; j--) {
    etoile = "*".repeat(j);
    console.log(etoile);
}