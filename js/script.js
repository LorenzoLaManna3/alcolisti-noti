//funzione per far funzionare l'hamburger e il banner 

let phonebannertot = document.querySelector(".phonebannertot");  // var per contenere il banner completo

let hamburger = document.querySelector(".hamburger"); //var per l'icona hamburger
let closebanner = document.querySelector(".closebanner"); //var per il pulsante X

hamburger.onclick = function () { //cliccando l'icona si attiva questa funzione
    phonebannertot.classList.add("showbanner"); //aggiungi la classe "showbanner" al banner per mostrarlo
    console.log('mostra banner') //console.log = scrivi nella console
};

closebanner.onclick = function () {
    phonebannertot.classList.remove("showbanner");
    console.log('nascondi banner')
};


phonebannertot.addEventListener('click', function (event) { // per far chiudere il banner anche quando si clicca nello sfondo
    if (event.target === this) { // Controlla se il target dell'evento è il div stesso
        console.log('backgraund banner');
        phonebannertot.classList.remove("showbanner");
        console.log('nascondi banner')
    }
});

// Per far funzionare le modali:

let modals = document.querySelectorAll(".modal"); //stringa per contenere tutte le modali
let modalcnt = modals.length; //per prendere  il numero delle modali (lenght = lunghezza della stringa)
console.log("childcounter" + modalcnt); //sciviamo modalcnt nella console


let pre = document.querySelector(".pre"); //variabile per il bottone pre
let next = document.querySelector(".next"); //variabile per il bottone next


let completemodal = document.querySelector(".completemodal"); // varibile contnenete la section con tutti gli elementi della modale (sfondo, freccie...)

const allcard = document.querySelectorAll(".card"); //stringa per tutte le card

// per fa funsionare le card come pulsanti - card

let itemId = ""; //variabile che conterra l'id della card che viene cliccata

allcard.forEach(card => {  //per ogni card
    card.addEventListener('click', function () {  //percepire quando una card viene cliccata e attivare la funzione
        if (this.id) { // "se la carda ha un id"
            itemId = this.id; //prendere l'id di quella card
            console.log("Selected ID:", itemId); //sciviamo nella console id della card appena cliccato
            mostramodale(); //attiva questa funzione (è sotto) per mostrare la modale
            verificafreccia(); //attiva questa funzione (è in fondo) per verificare le visibilità delle freccie
        } else { // oppure
            console.log("Nessun div"); // Messaggio se non c'è un ID
        };
    });
});

// funzione per mostrare la modale 

function mostramodale() {
    Rimuovimodali();
    const stessoid = document.querySelector(`.modals #${itemId}`); // prendiamo la modale con lo stesso id
    stessoid.classList.add("showmodal"); //mostriamo la modale
};

// funzione per far funzionare il tasto di chiusura

let close = document.querySelector(".close");

close.onclick = function () { // per chiudere
    Rimuovimodali(); //richiama a questa funzine (alla fine)
    completemodal.classList.remove("showcompletemodal");
};


// funzione per far funzionare le freccie

pre.onclick = function () { //se cliccli pre attiva esegui funzione
    indietro();
};

next.onclick = function () {  //se cliccli next attiva esegui funzione
    avanti();
};

function indietro() {
    const showElement = document.querySelector('.showmodal');  // inserire nella variabile la modale visibile
    const posizione = Array.from(modals).indexOf(showElement); // prendere la posizone numerica della modale visibile dentro la stringa delle modali
    console.log(posizione);
    const preId = posizione - 1; //diminuisco per prednere il valore della variabile precedente
    console.log(preId);
    if (preId >= 0) { //se la posizione della prossima modale è maggiore o uguale a 0...
        Rimuovimodali();
        const premodal = modals[preId]; // selezionare la modale con la nuova posizione e...
        premodal.classList.add("showmodal"); //...renderla visibile
        if (preId == 0) { //se la posizione è la prima disponible
            console.log('prima modale');
            pre.classList.add("frecciainvisibile"); //rendere invisibile la freccia pre
        } else {
            next.classList.remove("frecciainvisibile"); //rendere visibile la freccia next
        };
    } else {
        console.log('nessuna modale precedente');
    };
};

function avanti() {
    const showElement = document.querySelector('.showmodal'); // inserire nella variabile la modale visibile
    const posizione = Array.from(modals).indexOf(showElement); // prendere la posizone numerica della modale visibile dentro il gruppo delle modali
    console.log(posizione);
    const nextId = posizione + 1; //aumento per prednere il valore della prossima variabile
    console.log(nextId);
    if (nextId < modalcnt) { //se la posizione della prossima modale è minore della quantità delle modali...
        Rimuovimodali();
        const premodal = modals[nextId]; // selezionare la modale con la nuova posizione e...
        premodal.classList.add("showmodal"); //...renderla visibile
        if (nextId == (modalcnt - 1)) { //se la posizione è l'ultima disponibile
            console.log('ultima modale');
            next.classList.add("frecciainvisibile"); //rendere invisibile la freccia next
        } else {
            pre.classList.remove("frecciainvisibile"); //rendere visibile la freccia pre
        };
    } else {
        console.log('nessuna modale succesiva')
    };
};

// funzione per verificare se le freccie devono essere visibili o meno (inoltre mostra la completemodal)

function verificafreccia() {
    completemodal.classList.add("showcompletemodal");//per mostrare la section citata precedentemente
    const showElement = document.querySelector('.showmodal');  // inserire nella variabile la modale visibile
    const posizione = Array.from(modals).indexOf(showElement); // prendere la posizone numerica della modale visibile dentro il gruppo delle modali
    console.log(posizione);
    if (posizione == 0) {  //se la posizione è la prima
        console.log('prima modale');
        pre.classList.add("frecciainvisibile"); //rendere invisibile la freccia pre
    } else {
        pre.classList.remove("frecciainvisibile"); //rendere visibile la freccia next
    };
    if (posizione == (modalcnt - 1)) { //se la posizione è l'ultima disponibile
        console.log('prima modale');
        next.classList.add("frecciainvisibile"); //rendere invisibile la freccia pre
    } else {
        next.classList.remove("frecciainvisibile"); //rendere visibile la freccia next
    };
};

// per far funzionare la tastiera ( * riga 145-51 per lettura del link, 152 per cambiare link)

document.addEventListener('DOMContentLoaded', () => {  // DOMContentLoaded è un evento che viene attivato quando il documento HTML è stato completamente caricato
    document.addEventListener('keydown', gestisciTasti); // listener () registrato per l'evento 'keydown') che si attiva ogni volta che un tasto sulla tastiera viene premuto.
    const hash = window.location.hash; // per verificare il link di accesso
    if (hash === '#random') { //verifica se hash è #random
        randomodal();
        console.log('random')
    } else {
        console.log('no random')
    };
    changeLink();
});

function gestisciTasti(event) {
    if (event.key === "ArrowRight") {  //se il tasto premuto è freccia destra
        avanti();
    } else if (event.key === "ArrowLeft") {  //se il tasto premuto è freccia sinistrs
        indietro();
    }
};

// funzione per nascondere ogni modale (no completemodal)

function Rimuovimodali() {
    for (let b = 0; b < modalcnt; b++) { //ciclo che va da zero a "modalcnt" (numero delle modali): la "b" aumenta progressivamente di uno
        modals[b].classList.remove("showmodal"); //rimuve la classse "showmaodal" alla modale con posizione "b" quindi finendo tutti i cicli saranno tutte invisibili
    };
};

// funzione per la modale random
let randomNumber

function randomodal() {
    randomNumber = Math.floor(Math.random() * modalcnt) + 1; // Genera un numero randomico da 1 al numero delle modali
    console.log('Random' + randomNumber);
    Rimuovimodali(); // per sicurezza
    const randommodal = modals[randomNumber]; // selezionare la modale con la nuova posizione e...
    randommodal.classList.add("showmodal"); //...renderla visibile
    verificafreccia();
};

// funzione per generare un link random

const allinks = [ // lista dei link
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/birre/chiare.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/birre/ambrate.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/birre/scure.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/vini/rossi.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/vini/bianchi.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/vini/rosati.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/vini/spumanti.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/vini/dolci.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/grappe%20giovani.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/grappe%20invecchiate.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/grappe%20stravecchie.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/grappe%20aromatizzate.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/amari%20all'erbe.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/amari%20forti.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/amari%20secchi.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/digestivi/amari%20dolci.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/gin.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/rum.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/vodka.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/agave.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/assenzio.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/bitter.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/passoa.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/super%20alcolici/triplesec.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/seccchi/whisky.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/seccchi/brandy.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/seccchi/vermouth.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/seccchi/sidro.html",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/cocktail/predinner.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/cocktail/after.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/cocktail/frozen.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/cocktail/pestati.html#random",
    "https://lorenzolamanna3.github.io/alcolisti-noti/pagine/extra/curiosit%C3%A0.html#random",
];

let linkcnt = allinks.length;
let randomlink = "";

function getRandomLink() { // Funzione per generare un link randomico
    const randomN = Math.floor(Math.random() * linkcnt); // numero randomico da 0 a numero dei link
    console.log('Random' + randomN);
    randomlink = allinks[randomN]; //link randomico preso dalla lista di tutti i link
    console.log(randomlink);
};

const linkfinale = document.querySelectorAll('.random') // all siccome sono 2

function changeLink() { //si attiva cliccando sulla scritta random
    getRandomLink(); //per generare il link randomico
    for (let b = 0; b < 2; b++) { 
        linkfinale[b].href = randomlink; //ogni "a" ottiene il link nel suo href
        console.log(linkfinale[b].href);
    };
};