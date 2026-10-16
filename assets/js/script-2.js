
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

function formattaPrezzo(prezzo){
   const prezzoFormattato = `€ ${prezzo}`;
   return prezzoFormattato;
}

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
}


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

function renderProdottiAvanzata(lista){
   const griglia = document.querySelector("#grigliaProdotti");
   griglia.innerHTML = "";

   for(const prodotto of lista){
      let bottoneCarrello = "";
      if(prodotto.disponibile){
         bottoneCarrello = `<button class="button-product" onclick="aggiungiAlCarrello('${prodotto.nome}')">Aggiungi al carrello</button>`
      } else {
         bottoneCarrello = `<button disabled class="button-product" >Esaurito</button>`
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