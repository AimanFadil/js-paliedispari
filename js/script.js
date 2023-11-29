//PARI E DISPARI


function generateRandomNumber(){
    return Math.floor(Math.random() * 5 + 1)
}

function checkSomma(piu){
    if(piu % 2 == 0){
        return 'pari';
    }

    return 'dispari';
}

let scelta = prompt('Inserisci un valore tra pari e dispari');

let numero = parseInt(prompt('Inserisci un numero tra 1 e 5 '));

let numero_pc = generateRandomNumber();

let somma = numero + numero_pc;

let risultato = checkSomma(somma)

if (risultato == scelta){
    console.log('Hai vinto')
}
else{
    console.log('Hai Perso')
}