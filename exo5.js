// Programme pour un prof flemmard,
// retournant un commentaire en focntion des notes des copies de ces élèves

// Liste de notes
let notes = [2, 15, 10, 19, 5, 14, 17, 0, 20, 8];
console.log("Commentaires en fonction des notes obtenues : "); 

for (let note of notes) {
    if (note >= 0 && note <= 4) {
        console.log(`${note} : Catastrophique, il faut tout revoir !`);
    } else if (note >= 5 && note <= 10) {
        console.log(`${note} : Insuffisant !`);
    } else if (note >= 11 && note <= 14) {
        console.log(`${note} : Peut mieux faire ! `);
    } else if (note >= 15 && note <= 17) {
        console.log(`${note} : Bien ! `);
    }  else if (note >= 18 && note <= 20) {
        console.log(`${note} : Excellent, bon travail ! `);
    }
}