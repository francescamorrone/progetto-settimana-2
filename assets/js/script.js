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
      immagine: "https://m.media-amazon.com/images/I/71mTfSKhhTL._AC_SL1500_.jpg",
      disponibile: true
   }, 
   {
      nome: "Tablet",
      categoria: "Elettronica",
      prezzo: 199.00,
      rating: 5,
      immagine: "https://m.media-amazon.com/images/I/616FFqht2sL._AC_SL1500_.jpg",
      disponibile: true
   },
   {
      nome: "Marmellata",
      categoria: "Cucina",
      prezzo: 4.99,
      rating: 4,
      immagine: "https://m.media-amazon.com/images/I/712Up33dUVL._AC_SL1500_.jpg",
      disponibile: true
   },
   {
      nome: "Vinile Fontaines DC",
      categoria: "Musica",
      prezzo: 199.00,
      rating: 5,
      immagine: "https://m.media-amazon.com/images/I/61NxtC0cPML._AC_SY300_SX300_QL70_ML2_.jpg",
      disponibile: true
   },
   {
      nome: "CD Michael Jackson",
      categoria: "Musica",
      prezzo: 39.99,
      rating: 5,
      immagine: "https://m.media-amazon.com/images/I/51cyEZc7AjL._AC_SL1080_.jpg",
      disponibile: true
   },
   {
      nome: "Lampada",
      categoria: "Casa",
      prezzo: 69.99,
      rating: 1,
      immagine: "https://m.media-amazon.com/images/I/71ytxreUvmL._AC_SL1500_.jpg",
      disponibile: true
   },
   {
      nome: "Comodino",
      categoria: "Casa",
      prezzo: 109.99,
      rating: 3,
      immagine: "https://m.media-amazon.com/images/I/61N5cVvtuBL._AC_SL1500_.jpg",
      disponibile: false
   },
   {
      nome: "Racconti di Lovecraft",
      categoria: "Libri",
      prezzo: 25.99,
      rating: 5,
      immagine: "https://m.media-amazon.com/images/I/71xx2LCE9+L._SL1479_.jpg",
      disponibile: true
   },
   {
      nome: "Computer",
      categoria: "Elettronica",
      prezzo: 1099.99,
      rating: 2,
      immagine: "https://m.media-amazon.com/images/I/71APX2UPTVL._AC_SL1500_.jpg",
      disponibile: true
   },
   {
      nome: "Cover per cellulare",
      categoria: "Elettronica",
      prezzo: 109.99,
      rating: 3,
      immagine: "https://m.media-amazon.com/images/I/61uOkmiI8TL._AC_SL1500_.jpg",
      disponibile: true
   },
   {
      nome: "Maglia",
      categoria: "Abbigliamento",
      prezzo: 19.99,
      rating: 3,
      immagine: "https://m.media-amazon.com/images/I/61Wo67SDKRL._AC_SX569_.jpg",
      disponibile: false
   },
   {
      nome: "Sciarpetta",
      categoria: "Abbigliamento",
      prezzo: 5.99,
      rating: 5,
      immagine: "https://m.media-amazon.com/images/I/71yulqjs6NL._AC_SX679_.jpghttps://m.media-amazon.com/images/I/71yulqjs6NL._AC_SX679_.jpg",
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
*/

function renderProdotti(lista){
   const grigliaProdotti = document.querySelector("#grigliaProdotti");
   grigliaProdotti.innerHTML = "";

   for(const prodotto of lista){
      grigliaProdotti.innerHTML += `
         <div class="card-prodotto">
            <img src="${prodotto.immagine}" alt="${prodotto.nome}">
            <a href="#">${prodotto.nome}</a>
            <p>${stelline(prodotto.rating)}</p>
            <p>Prezzo: ${formattaPrezzo(prodotto.prezzo)}</p>
            <p class="categoria" >${prodotto.categoria}</p>
         </div>
      `;
   }
}

renderProdotti(prodotti)



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
         bottoneCarrello = `<button class="button-product" onclick="aggiungiAlCarrello('${prodotto.nome}')">Aggiungi al carrello</button>`
      } else {
         bottoneCarrello = `<button disabled class="button-product">Esaurito</button>`
      }

       griglia.innerHTML += `
         <div class="card-prodotto">
            <img src="${prodotto.immagine}" alt="${prodotto.nome}">
            <a href="#">${prodotto.nome}</a>
            <p>${stelline(prodotto.rating)}</p>
            <p>Prezzo: ${formattaPrezzo(prodotto.prezzo)}</p>
            <p class="categoria" >${prodotto.categoria}</p>
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
function riepilogoCarrello(){
   const riepilogo = document.querySelector("#riepilogo");
   let totale = 0;
   let riepilogoHTML = ""
   riepilogoHTML = `
      <table>
         <tr>
            <th>Prodotto</th>
            <th>Prezzo</th>
            <th>Totale</th>
         </tr>
   `
   for(const prodotto of prodottiInCarrello){
      riepilogoHTML += `
         <tr>
            <td>${prodotto.nome}</td>
            <td>${formattaPrezzo(prodotto.prezzo)}</td>
         </tr>
      `
      totale += Number(prodotto.prezzo);
   }
   riepilogoHTML += `
      <tr>
         <td></td>
         <td></td>
         <td>${formattaPrezzo(totale.toFixed(2))}</td>
      </tr>
      </table>
   `
   riepilogo.innerHTML = riepilogoHTML;
}


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
