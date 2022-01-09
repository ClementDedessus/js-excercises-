//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "jean";
let personne2 = "paul";
let personne3 = "marcel";
let personne4 = "clement";

//On met la première lettre en majuscule, on salue la  personne et on donne le nombre de lettre dans son prénom
const nom = (personne) => {
    personne = personne[0].toUpperCase() + personne.substr(1);
    const longueur = personne.length;
    console.log(`Bonjour ${personne}, ton prénom contient ${longueur} lettres`);
}

nom(personne1);
nom(personne2);
nom(personne3);
nom(personne4);
nom(personne1);

//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const tableauAges = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombreEleves = tableauAges.length;
// variable pour calculer la somme des ages
let sommeAges = 0;
for (let eleve of tableauAges) {
    sommeAges += eleve;
}
//moyenne d'age dans la classe
const moyenneAges = sommeAges / nombreEleves;
console.log('Il y a ' + nombreEleves + " élèves dans la classe et la moyenne d'age est " + moyenneAges);



//-----CODE MAL MIS EN FORME------

const temperature = 25;

if (temperature < 10) {
    console.log("Il fait très froid");
}
else if (temperature < 0) {
    console.log("Il fait froid");
} else if (temperature < 10) {
    console.log("Il fait frais");
} else if (temperature < 20) {
    console.log("Il fait doux");
} else if (temperature < 30) {
    console.log("Il fait bon");
} else {
    console.log("Il fait chaud");
}
