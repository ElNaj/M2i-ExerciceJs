// Programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand

let read = require("readline-sync");

let saisiUser1 = read.questionInt("Saisir un premier nombre : " );
let saisiUser2 = read.questionInt("Saisir un second nombre : " );
let saisiUser3 = read.questionInt("Saisir un dernier nombre : " );

let saisis = [saisiUser1, saisiUser2, saisiUser3]; 
let valeurMax = Math.max(...saisis);

console.log(valeurMax);