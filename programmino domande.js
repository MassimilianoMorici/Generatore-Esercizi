/// PROGRAMMINO DOMANDE


const esercizi = 

[

    `D2 - Elenca e descrivi i principali datatype in JavaScript.`,
    
    `D2 - Scrivi il codice necessario ad effettuare un'addizione dei numeri 12 e 20 e salvando il risultato in una variabile.`,
    
    `D2 - Crea una variabile di nome "x" e assegna ad essa il numero 12`,
    
    `D2 - Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa`,
    
    `D2 - Esegui una sottrazione tra i numeri 4 e la variabile "x" (che contiene il numero 12) `,
    
    `D2 - crea un oggetto che ti rappresenti (come proprietà usa nome, cognome e hobby) `,
    
    `D2 - Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!). Verifica che name1 sia diversa da name2. Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!). `,

    `D3 - Scrivi un algoritmo per trovare il più grande tra due numeri interi.`,

    `D3 - Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione. "num < 5 - mostra in console Tiny" "num < 10 - mostra in console Small" "num < 15 - mostra in console Medium" "num < 20 - mostra in console Large" "num >= 20 - mostra in console Huge" `,
    
    `D3 - Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8`,
    
    `D3 - Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.`,

    `D3 EXTRA - Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.`,

    `D3 EXTRA - Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart" . C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10). Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout. `,

    `D3 EXTRA - Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale. `,

    `D3 EXTRA - Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female". La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale. Es. se "isMale" e' vero, il valore di gender deve essere "male" `,

    `D3 EXTRA - Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "fizz" e se il numero è multiplo di 5, stampa "buzz". Se le condizioni si verificano entrambe, stampa "fizzBuzz" . `,

    `D5 - Scrivi una funzione chiamata "crazySum"" che riceve due numeri interi come parametri. La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.`,
   
    `D5 - Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.`,
   
    `D5 - Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).`,
   
    `D5 - Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.`,
    
    `D5 - Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10. `,
    
    `D5 EXTRA - Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato. `,

    `D5 EXTRA - Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19. Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3. `,

    `D5 EXTRA - Scrivi una funzione chiamata "codify" che accetta una stringa come parametro. La funzione deve aggiungere la parola CODE all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con CODE allora deve ritornarla senza modifiche. `,

    `D5 EXTRA - Scrivi una funzione chiamata "check3And7" la quale accetta un numero intero positivo come parametro. La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.`,
     
    `D5 EXTRA - Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere. `,
    
]

/* PARTE CONSOLE LOG SOLO JS

const minRange = 0
const maxRange = esercizi.length 

const randomNumb = Math.floor(Math.random() * (maxRange - minRange) + minRange)

console.log (`Esercizio: ` , esercizi[randomNumb])
*/


const qualeEs = function() {
    const minRange = 0
    const maxRange = esercizi.length 
    const randomNumb = Math.floor(Math.random() * (maxRange - minRange) + minRange)
    return esercizi[randomNumb]
}

const genera = function() {
    let paragrafo = document.getElementById(`campoEsercizio`)
    paragrafo.innerText = qualeEs()
}

console.log (genera)


// Morici Massimiliano



