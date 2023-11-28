//PARI E DISPARI
let NumScelta = prompt("Scegliere pari o dispari");

let UtenteNum = parseInt(prompt("Inserisci un numero da 1 a 5"));

let PcNum = Math.floor(Math.random() * 5) + 1;

const somma = UtenteNum + PcNum;

function PariDispari(numero) {
    return numero % 2 === 0;
}

const Pari = PariDispari(somma);


if (PariDispari(somma) === (NumScelta === "pari")) {
    console.log(`L'utente ha vinto. La somma dei due numeri è ${somma}, che è pari.`);
} 
else if(PariDispari(somma) === isNaN) {
    console.log(`Non hai capito il gioco!! Questo: ${somma}, non è un risultato valido`);
}
else{
    console.log(`Il computer ha vinto. La somma dei due numeri è ${somma}, che è dispari.`);
}