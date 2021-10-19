// Programme demandant à l'utilisateur de saisir un nombre et 
// génére un escalier d'étoiles

let read = require("readline-sync");
let nombre = read.questionFloat("Saisir un nombre : " );
console.log(`Votre esacalier aura ${nombre} lignes`);

let etiole = "";
for (let i = 1; i <= nombre; i++) {
        etiole += "*";
        console.log(etiole);
}