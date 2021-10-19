// Programme simulant une calculatrice et demande à l'utilisateur de saisir une premier opérande
// un opérateur et un second opérande pour réaliser des opérations de bases

let read = require("readline-sync");
let operande1 = read.questionFloat("Saisir un premier operande : " );
let operateur = read.question("Saisir un premier operateur : " );
let operande2 = read.questionFloat("Saisir un second operande : " );

function addition(operande1, operande2) {
    let resultat = operande1 + operande2;
    return console.log(`${operande1} + ${operande2} = ${resultat}`);
}

function soustraction(operande1, operande2) {
    let resultat = operande1 - operande2;
    return console.log(`${operande1} - ${operande2} = ${resultat}`);
}

function multiplication(operande1, operande2) {
    let resultat = operande1 * operande2;
    return console.log(`${operande1} * ${operande2} = ${resultat}`);
}

function division(operande1, operande2) {
    if (operande2 === 0){
        console.log("Division par zéro impossible");
    }
    let resultat = operande1 / operande2;
    return console.log(`${operande1} / ${operande2} = ${resultat}`);
}

switch (operateur) {
    case "+" :
        addition(operande1, operande2);
        break;
    case "-" :
        soustraction(operande1, operande2);
        break;
    case "*" :
        multiplication(operande1, operande2);
        break;
    case "/" :
        division(operande1, operande2); 
        break;
    default : 
        console.log(`ERREUR, OPERATEUR : ${operateur} INCONNU`);
}


