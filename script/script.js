//Exercice 1
let degreC = 22;
let degreF = degreC * 9/5 + 32;

console.log("Température en degrés : " + degreC + ", et température en Fahrenheit : " + degreF);

//Exercice 2
let longueur = 5;
let largeur = 4;

console.log("L'aire du rectangle (longueur x largeur) : " + largeur*longueur);

//Exercice 3
let prenom = "Camille";
let nom = "Golliot";

console.log("Je m'appelle est : " + prenom + " " + nom);

//Exercice 4
let prixHT = 100;
const TVA = 0.2;
let prixTTC = prixHT + prixHT*TVA;

console.log("Prix HT : " + prixHT + "€, TVA actuelle : " + TVA + " et prix TTC : " + prixTTC + "€");

//Exercice 5
let enigme = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)
//C'est true
console.log(enigme);

//Exercice 6
let poidsKilo = 52.6;
let tailleMetre = 1.68;
let IMC = poidsKilo/ (tailleMetre*tailleMetre);

console.log("L'IMC de cette personne est de : " + IMC.toFixed(2));

//Exercice 7
const montMinComm = 25;
let montTotal = 50;

montTotal >= montMinComm ? console.log("Livraison Gratuite !!") : console.log("Frais de livraison : 5.5 euros");

//Exercice 8
let BinaireString = "1010";

console.log("Nombre binaire : " + BinaireString + ", converti : " + parseInt(BinaireString,2));

//PARTIE 2
//Exercice 1
const personne = {
    prenom : "Camille",
    nom : "Golliot",
    age : 20,
    ville : "Caen"
};

console.log("Le prénom de ma personne : " + personne.prenom);
console.log("Le nom de ma personne : " + personne.nom);
console.log("L'âge de ma personne : " + personne.age);
console.log("La ville de ma personne : " + personne.ville);

//Exercice 2
const personnes = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
]
/*
console.log(personnes);
console.table(personnes);
*/
//Exercice 3
personnes.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})
/*
console.log(personnes);
console.table(personnes);
*/
//Exercice 4
personnes[0].prenom = "Jean";
personnes.splice(1, 1);

console.log(personnes);
console.table(personnes);

//Exercice 5
let nombre = [
    1,2,3,4,5,6,7,8,9,0
]

console.log("Premier nombre : " + nombre[0] + ", dernier nombre : " + nombre[9] + " et la longueur du tableau : "+ nombre.length);