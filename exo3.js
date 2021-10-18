// Programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit
// et vérifie le profit ou la perte

let read = require("readline-sync");

let prix1 = read.questionFloat("Veuillez saisir le prix de fabrication : " );
let prix2 = read.questionFloat("Veuillez saisir le prix de vente : " );

// Si le prix de fabrication > prix de vente il y a perte sinon profit 
if (prix1 > prix2) {
    console.log(`Perte de ${prix1 - prix2}€`);
} else {
    console.log(`Profit de ${prix2 - prix1}€`);
}