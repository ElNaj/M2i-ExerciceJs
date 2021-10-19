// Programme parcourant une liste de température 
// et affiche la température la plus proche de 0

function tempZero() {
    let temperatures = [12, 25, 5, 7, 6, -5, 2];
        console.log(`Liste des températures :  [${temperatures}]`);
        console.log(`La température la plus proche de 0°C est ${Math.min(...temperatures)}`);
}
tempZero();
