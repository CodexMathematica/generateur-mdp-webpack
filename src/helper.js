//fonction permettant d'obtenir aléatoirement soit une majuscule soit une minuscule soit un nombre soit un symbole.
export function randomCharacter(x){

    return x[Math.floor(Math.random() * x.length)];
}