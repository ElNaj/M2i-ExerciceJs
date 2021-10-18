// Programme qui demande à l'utilisateur de saisir son nom et l'affiche avec le message "Bienvenue"

let read = require("readline-sync");

let prenom = read.question("Veuillez saisir votre prenom. " );
console.log(`Bienvenue ${prenom} !`);