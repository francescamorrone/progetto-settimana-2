/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

prodotti = [
   {
      nome: "Cuffie",
      categoria: "Elettronica",
      prezzo: 89.99,
      rating: 4,
      immagine: "<path-immagine-cuffie>",
      disponibile: true
   }, 
   {
      nome: "Tablet",
      categoria: "Elettronica",
      prezzo: 199.00,
      rating: 5,
      immagine: "<path-immagine-tablet>",
      disponibile: true
   },
   {
      nome: "Marmellata",
      categoria: "Cucina",
      prezzo: 4.99,
      rating: 4,
      immagine: "<path-immagine-marmellata>",
      disponibile: true
   },
   {
      nome: "Vinile Fontaines DC",
      categoria: "Musica",
      prezzo: 199.00,
      rating: 5,
      immagine: "<path-immagine-vinile>",
      disponibile: true
   },
   {
      nome: "CD Michael Jackson",
      categoria: "Musica",
      prezzo: 39.99,
      rating: 5,
      immagine: "<path-immagine-cd>",
      disponibile: true
   },
   {
      nome: "Lampada",
      categoria: "Casa",
      prezzo: 69.99,
      rating: 1,
      immagine: "<path-immagine-lampada>",
      disponibile: true
   },
   {
      nome: "Comodino",
      categoria: "Casa",
      prezzo: 109.99,
      rating: 3,
      immagine: "<path-immagine-tablet>",
      disponibile: false
   },
   {
      nome: "Racconti di Lovecraft",
      categoria: "Libri",
      prezzo: 25.99,
      rating: 5,
      immagine: "<path-immagine-racconti>",
      disponibile: true
   },
   {
      nome: "Computer",
      categoria: "Elettronica",
      prezzo: 1099.99,
      rating: 2,
      immagine: "<path-immagine-computer>",
      disponibile: true
   },
   {
      nome: "Cover per cellulare",
      categoria: "Elettronica",
      prezzo: 109.99,
      rating: 3,
      immagine: "<path-immagine-comodino>",
      disponibile: true
   },
   {
      nome: "Maglia",
      categoria: "Abbigliamento",
      prezzo: 19.99,
      rating: 3,
      immagine: "<path-immagine-maglia>",
      disponibile: false
   },
   {
      nome: "Sciarpetta",
      categoria: "Abbigliamento",
      prezzo: 5.99,
      rating: 5,
      immagine: "<path-immagine-sciarpetta>",
      disponibile: true
   }
]

console.log(prodotti)


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo){
   const prezzoFormattato = `€ ${prezzo}`;
   return prezzoFormattato;
}

for( let i = 0; i < prodotti.length; i++) {
   console.log(`${prodotti[i].nome}: ${formattaPrezzo(prodotti[i].prezzo)}`);
};



/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating){
   let ratingStelline = ""
   switch(rating){
      case 1: 
         ratingStelline = "★☆☆☆☆";
         break;
      case 2:
         ratingStelline = "★★☆☆☆";
         break;
      case 3:
         ratingStelline = "★★★☆☆";
         break;
      case 4:
         ratingStelline = "★★★★☆";
         break;
      case 5:
         ratingStelline = "★★★★★";
         break;
   }
   return ratingStelline;
};

for(let i = 0; i < prodotti.length; i++) {
   console.log(`${prodotti[i].nome}: rating ${prodotti[i].rating} → ${stelline(prodotti[i].rating)}`);
};


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroPerCategoria(categoriaDaFiltrare){
   let prodottiFiltrati = [];
   for(let i = 0; i < prodotti.length; i++){
      if(prodotti[i].categoria === categoriaDaFiltrare){
         prodottiFiltrati.push(prodotti[i]);
      }
   }
   return prodottiFiltrati;
}

console.log(filtroPerCategoria("Abbigliamento"))

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroDisponibilitaERating(){
   let prodottiFiltrati = [];
   for(let i = 0; i < prodotti.length; i++){
      if(prodotti[i].disponibile === true && prodotti[i].rating >= 3){
         prodottiFiltrati.push(prodotti[i]);
      }
   }
   return prodottiFiltrati;
}

console.log(filtroDisponibilitaERating())


/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA 


RISPOSTA IN SCRIPT-2
*/



/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function renderProdottiAvanzata(lista){
   const griglia = document.querySelector("#grigliaProdotti");
   griglia.innerHTML = "";

   for(const prodotto of lista){
      let bottoneCarrello = "";
      if(prodotto.disponibile){
         bottoneCarrello = `<button onclick="aggiungiAlCarrello('${prodotto.nome}')">Aggiungi al carrello</button>`
      } else {
         bottoneCarrello = `<button disabled>Esaurito</button>`
      }

       griglia.innerHTML += `
         <div class="card-prodotto">
         <img src="${prodotto.immagine}" alt="${prodotto.nome}">
         <h3>${prodotto.nome}</h3>
         <p>Categoria: ${prodotto.categoria}</p>
         <p>Prezzo: ${formattaPrezzo(prodotto.prezzo)}</p>
         <p>Rating: ${stelline(prodotto.rating)}</p>
         ${bottoneCarrello}
         </div>
      `;
   }
}

function creaCarrello(){
   let contatore = 0;

   return function(){
      contatore++;
      const headerCarrello = document.querySelector("#carrelloHeader");
      headerCarrello.innerHTML = `Carrello (${contatore})`;
   }
}

const aggiungiAlCarrello = creaCarrello()

renderProdottiAvanzata(prodotti)



/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
