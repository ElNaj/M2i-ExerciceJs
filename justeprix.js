// Programme du Juste Prix qui demande à l'utilisateur de saisir un nombre entier de tentative pour simuler les 30 secondes
// afin de deviner le prix exact généré aléatoirement, le programme se construit comme ci-dessous:
/**
 * 1 - Saisir un nombre de tentative : nb echec possible
 * 2 - Saisir un nombre de N : pour générer un juste prix aléatoire
 * 3 - Saisir un nombre : le prix 
 * 4 - Comparer le prix avec le résultat attendu "N" aléatoire
 * 5 - Afficher "Plus" ou "Moins"
 * 6 - Retirer une vie
 * */ 

let read = require("readline-sync");
let vie = read.questionInt("Saisir un nombre de tentative : " );
let n = read.questionInt("Saisir un nombre N > 0 pour generer aleatoirement le prix a trouver : " );
justePrix();

function justePrix() {
    // Math.floor(Math.random() * (max - min + 1)) + min - nombre aléatoire entre min et max
    let prixExact = Math.floor(Math.random() * (n - 0 + 1)) + 0;
    console.log(prixExact);

    for (let i =  0; i <= vie + 2; i++) {
        let prix = read.questionInt("Saisir le juste prix : " ); 

        if (prix < prixExact) {
            console.log("Plus")
            vie -= 1;
            console.log(`Vie restante : ${vie}`);
        } else if (prix > prixExact) {
            console.log("Moins")
            vie -= 1;
            console.log(`Vie restante : ${vie}`);
        } else if (prix === prixExact) {
            console.log(`BRAVO!! Le juste prix est : ${prix}`);
            vie -= 1;
            break;
        } 
    }  
}
