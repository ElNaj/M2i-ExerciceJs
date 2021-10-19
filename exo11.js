// Programme demandant à l'utilisateur de saisir un nombre décimal et 
// renvoie exactement le nombre de billet et pièces qu'il faut obtenir 


let read = require("readline-sync");
let nombre = read.questionFloat("Nombre decimal saisi pour decompostion : " );

function money(nombre) {
    let resteBillets = [500, 200, 20, 10, 5];
    let restePieces = [2, 0.50, 0.02, 0.01];

    for (let i = 0; i < resteBillets.length; i++) {
        if ((nombre % resteBillets[i]) !== 0) {
            let billet = (nombre - (nombre % resteBillets[i]))/resteBillets[i];
            console.log(`Billet de ${resteBillets[i]} : ${billet}`);
        }   
        nombre = nombre % resteBillets[i];
    }
    for (let i = 0; i < restePieces.length; i++) {
        if ((nombre % restePieces[i]) !== 0) {
            let piece = (nombre - (nombre % restePieces[i]))/restePieces[i];
            console.log(`Piece de ${restePieces[i]} : ${piece}`);
        }  
        nombre = nombre % restePieces[i]; 
    }
}
money(nombre);
