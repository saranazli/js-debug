/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// modificato il maggiore in minore. errore di logica,'i' non poteva mai esistere se partiva da 0 ma doveva essere maggiore di 5 


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// modificato l'uguale in tre uguali per poter avere un valore numerico che sia pari


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

loopToFive();

// le virgole devono essere punto e virgola nei cilci ho anche richiamato la funzione.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)




function displayEvenNumbers() {
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        };
    };

    return evenNumbers;
};

console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

/* 
1 eliminato il punto e virgola posizionato dopo l'i++
2 l'uguale in tre uguali
3 il return va esternamente al ciclo for internamente alla function
4 let numbers è una const
5 il punto e virgola nell'if tra la parentesi tonda ) e la graffa {
6 la variabile con l'array da riempire deve essere globale
7 la funzione necessita di un parametro
8 il meno uno l'ho tolto
*/
