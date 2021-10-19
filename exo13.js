// Programme parcourant une liste de nombre
// et tri le résultat du plus petit au plus grand

function tri(){
    let nombres = [12, 25, 5, 7, 6, -5];
    let trie = nombres.sort((a, b) => a -b);
    console.log(trie);
}
tri();