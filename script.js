
// SETUP
// Seleziono elemento di container output
const outputContainer = document.querySelector(".container .row");
// Seleziono elemento di output in overlay
const overlay = document.querySelector(".overlay");
// Seleziono elemento dove andranno le immagini che otterrò dalla chiamata
const overlayImg = document.querySelector(".overlay-img");
// Seleziono close button
const closeBtn = overlay.querySelector(".close-btn");


// Dichiaro variabile con l'URL del server da cui estrapolerò i dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";



// ELABORAZIONE
// Chiamata Ajax all'endpoint
axios.get(endpoint)
    .then(response => {
        // Ottengo l'array di oggetti dall'API
        const cards = response.data;

        // Creo variabile di accumulo per l'output
        let cardsOutput = "";

        // Ciclo l'array di oggetti per estrapolare i dati
        cards.forEach(card => {

            // Destructuring
            const { url, title, date } = card;

            // Valorizzo la variabile di accumulo dell'output
            cardsOutput += `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    <img src="${url}" alt="immagine" class="response-img">
                    <h2>${title}</h2>
                    <p>${date}</p>
                    <img src="../assets_day1/img/pin.svg" alt="pin" class="pin">
                </div>
            </div>`;
        });

        // Inserisco in pagina le card
        outputContainer.innerHTML = cardsOutput;


        // Seleziono le immagini appena generate
        const imgs = document.querySelectorAll(".response-img");

        // Evento che al click mostra ogni immagine in overlay
        // Quest'evento va eseguito nella chiamata Axios (dentro il .then) perchè dipende dai dati richiesti al server
        imgs.forEach(img => { // Ciclo le immagini per aggiungere l'evento ad ognuna
            img.addEventListener("click", () => {
                overlayImg.src = img.src; // Le immagini generate vengono inserite nell'output overlay
                overlay.classList.add("d-flex"); // Aggiungo la classe flex per mostrare l'overlay in pagina al click
            })
        });
    })

    .catch(error => {
        console.log(error)
    });

// Evento sul close button
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("d-flex"); // Rimuovo la classe flex al click così l'overlay torna in display:none
})