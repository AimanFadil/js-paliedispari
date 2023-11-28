//PALINDROMA

let parolaScelta = prompt("Inserisci una parola");

function Palindromo(parola) {
    return parola === parola.split("").reverse().join("");
}


if (Palindromo(parolaScelta)) {
    console.log(`La parola "${parolaScelta}" è un palindromo.`);
} 
else {
    console.log(`La parola "${parolaScelta}" non è un palindromo.`);
}